'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Switch from '../ui/Switch'
import SubmitButton from '../ui/SubmitButton'
import { Button } from '../ui/Button'

export default function HypertensionForm() {
  const navigation = useRouter()
  const [isWomen, setIsWomen] = useState(true)
  // TODO: Calcular yo el BMI

  return (
    <form className='w-full py-6 px-8 bg-white shadow-lg rounded-lg' action=''>
      <h1 className='text-xl md:text-2xl lg:text-3xl mb-4'>
        Contesta las siguientes preguntas para saber tu nivel de riesgo de tener hipertensión
      </h1>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu edad?{' '}

          <input
            type='number'
            name='age'
            id='age'
            required
            placeholder='Escribe tu edad'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
        
        <p className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu género?{' '}

          <span className='flex flex-row items-center gap-2 text-gray-600'>
            Mujer{' '}
            <Switch
              checked={!isWomen}
              onChange={() => setIsWomen(!isWomen)}
            />
            {' '}Hombre
          </span>
        </p>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
      <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu concentración de hemoglobina en la sangre?{' '}

          <input
            type='text'
            name='hemoglobin'
            id='hemoglobin'
            required
            placeholder='Escribe tu concentración de hemoglobina en la sangre'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu nivel de ácido úrico?{' '}

          <input
            type='text'
            name='uric-acid'
            id='uric-acid'
            required
            placeholder='Escribe tu nivel de ácido úrico'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu nivel de colesterol en sangre?{' '}

          <input
            type='text'
            name='cholesterol'
            id='cholesterol'
            required
            placeholder='Escribe tu nivel de colesterol en sangre'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu nivel de glucosa en sangre?{' '}

          <input
            type='text'
            name='glucose'
            id='glucose'
            required
            placeholder='Escribe tu nivel de glucosa en sangre'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu concentración de insulina?{' '}

          <input
            type='text'
            name='insulin'
            id='insulin'
            required
            placeholder='Escribe tu nivel de insulina'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu nivel de triglicéridos en sangre?{' '}

          <input
            type='text'
            name='triglycerides'
            id='triglycerides'
            required
            placeholder='Escribe tu nivel de triglicéridos en sangre'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu peso en kilogramos?{' '}

          <input
            type='text'
            name='weight'
            id='weight'
            required
            placeholder='Escribe tu peso en kilogramos'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu estatura en centímetros?{' '}

          <input
            type='text'
            name='height'
            id='height'
            required
            placeholder='Escribe tu estatura en centímetros'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es la medida de tu cintura en centímetros?{' '}

          <input
            type='text'
            name='waist'
            id='waist'
            required
            placeholder='Escribe la medida de tu cintura en centímetros'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu presión arterial?{' '}

          <input
            type='text'
            name='blood-pressure'
            id='blood-pressure'
            required
            placeholder='Escribe tu presión arterial'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuantas horas duermes en promedio al dia?{' '}

          <input
            type='text'
            name='hours-sleep'
            id='hours-sleep'
            required
            placeholder='Escribe el numero de horas que duermes al dia'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuantas horas haces actividad física al dia?{' '}

          <input
            type='text'
            name='hours-activity'
            id='hours-activity'
            required
            placeholder='Escribe las horas que haces actividad física al dia'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-between items-center gap-4'>
        <Button
          variant='secondary'
          className='w-full mt-4'
          onClick={() => {
            navigation.back()
          }}
        >
          Cancelar
        </Button>

        <SubmitButton text='Determinar' />
      </div>
    </form>
  )
}
