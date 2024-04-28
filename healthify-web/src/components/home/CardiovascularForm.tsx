'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Switch from '../ui/Switch'
import SubmitButton from '../ui/SubmitButton'
import { Button } from '../ui/Button'

export default function CardiovascularForm() {
  const navigation = useRouter()
  const [isWomen, setIsWomen] = useState(true)
  const [doActivity, setDoActivity] = useState(false)
  const [isSmoker, setIsSmoker] = useState(false)
  const [isAlcoholic, setIsAlcoholic] = useState(false)

  return (
    <form className='w-full py-6 px-8 bg-white shadow-lg rounded-lg' action=''>
      <h1 className='text-xl md:text-2xl lg:text-3xl mb-4'>
        Contesta las siguientes preguntas para saber tu nivel de riesgo de enfermedad cardiovascular
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
          ¿Cuál es tu altura en centímetro?{' '}

          <input
            type='text'
            name='height'
            id='height'
            required
            placeholder='Escribe tu altura en centímetros'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu presión arterial sistólica?{' '}

          <input
            type='text'
            name='systolic-blood-pressure'
            id='systolic-blood-pressure'
            required
            placeholder='Escribe tu presión arterial sistólica'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>

        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          ¿Cuál es tu presión arterial diastólica?{' '}

          <input
            type='text'
            name='blood-pressure'
            id='blood-pressure'
            required
            placeholder='Escribe tu presión arterial diastólica'
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
          ¿Cuál es tu nivel de colesterol?{' '}

          <input
            type='text'
            name='cholesterol'
            id='cholesterol'
            required
            placeholder='Escribe tu nivel de colesterol total'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full flex flex-row justify-start items-center gap-8 my-4'>
        <p className='text-base w-full flex flex-col justify-start items-center gap-1'>
          ¿Realizas actividad física?{' '}

          <span className='flex flex-row items-center gap-2 text-gray-600'>
            No{' '}
            <Switch
              checked={doActivity}
              onChange={() => setDoActivity(!doActivity)}
            />
            {' '}Si
          </span>
        </p>

        <p className='text-base w-full flex flex-col justify-start items-center gap-1'>
          ¿Eres una persona fumadora?{' '}

          <span className='flex flex-row items-center gap-2 text-gray-600'>
            No{' '}
            <Switch
              checked={isSmoker}
              onChange={() => setIsSmoker(!isSmoker)}
            />
            {' '}Si
          </span>
        </p>
        
        <p className='text-base w-full flex flex-col justify-start items-center gap-1'>
          ¿Eres una persona alcohólica?{' '}

          <span className='flex flex-row items-center gap-2 text-gray-600'>
            No{' '}
            <Switch
              checked={isAlcoholic}
              onChange={() => setIsAlcoholic(!isAlcoholic)}
            />
            {' '}Si
          </span>
        </p>
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
