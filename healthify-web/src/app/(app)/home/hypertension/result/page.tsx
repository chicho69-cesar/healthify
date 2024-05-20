'use client'

import { useSearchParams } from 'next/navigation'

export default function ResultHypertensionPage() {
  const params = useSearchParams()
  const prediction = params.get('prediction')

  return (
    <div className='w-full py-6 px-12 rounded-md shadow-lg'>
      {prediction === '1' ? (
        <div>
          <h1 className='text-3xl text-center font-bold mb-4'>Predicción de hipertensión</h1>
          <h2 className='text-xl text-center font-semibold mb-4'>
            Resultado: <span className='font-bold text-red-500'>Positivo</span>
          </h2>

          <p className='text-center mb-6'>
            Tines un alto riesgo de tener hipertensión. Por favor, consulta a un médico para un diagnóstico más detallado.
          </p>
        </div>
      ) : (
        <div>
          <h1 className='text-3xl text-center font-bold mb-4'>Predicción de hipertensión</h1>
          <h2 className='text-xl text-center font-semibold mb-4'>
            Resultado: <span className='font-bold text-green-500'>Negativo</span>
          </h2>

          <p className='text-center mb-6'>
            Tienes un bajo riesgo de tener hipertensión. Sin embargo, se recomienda consultar a un médico para un diagnóstico más detallado.
          </p>
        </div>
      )}

      <h3 className='font-semibold text-lg mb-2'>
        Recuerda seguir los siguientes consejos.
      </h3>

      <p className='mb-2'>
        <span className='font-semibold'>Mantén un peso saludable</span>: El sobrepeso y la obesidad son factores de riesgo
        importantes para desarrollar hipertensión. Mantener un peso saludable a
        través de una dieta equilibrada y ejercicio regular puede ayudar a prevenir la
        enfermedad.
      </p>

      <p className='mb-2'>
        <span className='font-semibold'>Lleva una dieta balanceada</span>: Una alimentación saludable es clave para prevenir
        la hipertensión. Esto incluye consumir una variedad de alimentos, como frutas,
        verduras, granos enteros, proteínas magras y grasas saludables, y limitar el
        consumo de alimentos procesados, azúcares añadidos y grasas saturadas.
      </p>

      <p className='mb-2'>
        <span className='font-semibold'>Haz ejercicio regularmente</span>: El ejercicio regular puede ayudar a controlar el
        peso, reducir la presión arterial y reducir la cantidad de colesterol en sangre, lo que
        puede ayudar a prevenir la hipertensión. Se recomienda hacer al menos 150
        minutos de ejercicio moderado a la semana.
      </p>
    </div>
  )
}
