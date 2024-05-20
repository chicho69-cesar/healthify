'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormState } from 'react-dom'

import { diabetes } from '@/actions/app-actions'
import { Button } from '../ui/Button'
import SubmitButton from '../ui/SubmitButton'
import Switch from '../ui/Switch'

export default function DiabetesForm() {
  const navigation = useRouter()
  const [errorMessage, dispatch] = useFormState(diabetes, undefined)
  const [isWomen, setIsWomen] = useState(true)

  return (
    <form className='w-full py-6 px-8 bg-white shadow-lg rounded-lg' action={dispatch}>
      <h1 className='text-xl md:text-2xl lg:text-3xl mb-4'>
        Contesta las siguientes preguntas para saber tu nivel de riesgo de diabetes
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

          <input
            type='hidden'
            name='gender'
            id='gender'
            value={isWomen ? '2' : '1'}
          />
        </p>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className={`text-base ${!isWomen ? 'text-gray-400' : ''} w-full flex flex-col justify-start items-start gap-1`}>
          ¿Cuantos embarazos has tenido?{' '}

          <input
            type='number'
            name='pregnancies'
            id='pregnancies'
            disabled={!isWomen}
            placeholder='Escribe el número de embarazos'
            className={
              `w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none 
              focus:ring-2 focus:ring-sky-600 focus:border-transparent transition 
              duration-300 ease-in-out ${!isWomen ? 'bg-gray-100' : ''}`
            }
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu índice de masa corporal?{' '}

          <input
            type='text'
            name='bmi'
            id='bmi'
            required
            placeholder='Escribe tu índice de masa corporal'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
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
          ¿Cuál es tu nivel de insulina?{' '}

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
          ¿Cuál es tu índice de resistencia a la insulina?{' '}

          <input
            type='text'
            name='insulin-resistance'
            id='insulin-resistance'
            required
            placeholder='Escribe tu índice de resistencia a la insulina'
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
