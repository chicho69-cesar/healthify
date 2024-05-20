'use server'

import { redirect } from 'next/navigation'

export async function diabetes(prevState: string | undefined, formData: FormData) {
  try {
    const age = formData.get('age') as string
    const gender = formData.get('gender') as string
    const pregnancies = formData.get('pregnancies') as string
    const bmi = formData.get('bmi') as string
    const glucose = formData.get('glucose') as string
    const bloodPressure = formData.get('blood-pressure') as string
    const insulin = formData.get('insulin') as string
    const skinThickness = formData.get('insulin-resistance') as string

    const data = {
      pregnancies: gender === '2' ? parseInt(pregnancies) : 0,
      glucose: parseFloat(glucose),
      blood_pressure: parseFloat(bloodPressure),
      skin_thickness: parseFloat(skinThickness),
      insulin: parseFloat(insulin),
      bmi: parseFloat(bmi),
      diabetes_pedigree_function: 0.167,
      age: parseInt(age),
    }

    const response = await fetch(`${process.env.API_URL}/diabetes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      return 'Error al predecir la diabetes'
    }

    const result = await response.json()
    console.log(result)

    redirect('/home/diabetes/result?prediction=' + result.prediction)
  } catch (error) {
    throw error
  }
}

export async function hypertension(prevState: string | undefined, formData: FormData) {
  try {
    const age = formData.get('age') as string
    const gender = formData.get('gender') as string
    const hemoglobin = formData.get('hemoglobin') as string
    const uricAcid = formData.get('uric-acid') as string
    const cholesterol = formData.get('cholesterol') as string
    const glucose = formData.get('glucose') as string
    const insulin = formData.get('insulin') as string
    const triglycerides = formData.get('triglycerides') as string
    const weight = formData.get('weight') as string
    const height = formData.get('height') as string
    const waist = formData.get('waist') as string
    const bloodPressure = formData.get('blood-pressure') as string
    const hoursSleep = formData.get('hours-sleep') as string
    const physicalActivity = formData.get('hours-activity') as string

    const data = {
      sex: parseInt(gender),
      age: parseInt(age),
      hemoglobin: parseFloat(hemoglobin),
      acid_uric: parseFloat(uricAcid),
      cholesterol: parseFloat(cholesterol),
      glucose: parseFloat(glucose),
      insulin: parseFloat(insulin),
      triglycerides: parseFloat(triglycerides),
      weight: parseFloat(weight),
      height: parseFloat(height),
      waist: parseFloat(waist),
      blood_pressure: parseFloat(bloodPressure),
      sleep_hours: parseInt(hoursSleep),
      bmi: parseFloat(weight) / (parseFloat(height) / 100) ** 2,
      total_activity: parseInt(physicalActivity) * 60,
    }

    const response = await fetch(`${process.env.API_URL}/hypertension`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      return 'Error al predecir la hipertensión'
    }

    const result = await response.json()
    console.log(result)

    redirect('/home/hypertension/result?prediction=' + result.prediction)
  } catch (error) {
    throw error
  }
}

export async function cardiovascular(prevState: string | undefined, formData: FormData) {
  try {
    const age = formData.get('age') as string
    const gender = formData.get('gender') as string
    const weight = formData.get('weight') as string
    const height = formData.get('height') as string
    const systolicBloodPressure = formData.get('systolic-blood-pressure') as string
    const diastolicBloodPressure = formData.get('blood-pressure') as string
    const glucose = formData.get('glucose') as string
    const cholesterol = formData.get('cholesterol') as string
    const physicalActivity = formData.get('physical-activity') as string
    const smoker = formData.get('smoker') as string
    const alcoholic = formData.get('alcoholic') as string

    const data = {
      weight: parseFloat(weight),
      ap_hi: parseFloat(systolicBloodPressure),
      ap_lo: parseFloat(diastolicBloodPressure),
      cholesterol: parseFloat(cholesterol) <= 120 ? 1 : 2,
      gluc: parseFloat(glucose) <= 100 ? 1 : 2,
      smoke: parseInt(smoker) === 1 ? 1 : 0,
      alco: parseInt(alcoholic) === 1 ? 1 : 0,
      active: parseInt(physicalActivity) === 1 ? 1 : 0,
      age: parseInt(age) * 365.25,
      gender: parseInt(gender),
      height: parseFloat(height)
    }

    const response = await fetch(`${process.env.API_URL}/cardiovascular`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      return 'Error al predecir la enfermedad cardiovascular'
    }

    const result = await response.json()
    console.log(result)

    redirect('/home/cardiovascular/result?prediction=' + result.prediction)
  } catch (error) {
    throw error
  }
}
