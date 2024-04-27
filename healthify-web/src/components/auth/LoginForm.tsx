'use client'

import { useFormState } from 'react-dom'
import Link from 'next/link'

import { signIn } from '@/actions/user-actions'
import SubmitButton from '../ui/SubmitButton'

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(signIn, undefined)

  return (
    <form className='w-4/5 md:w-3/4 lg:w-1/2 py-6 px-8 bg-white shadow-lg rounded-lg' action={dispatch}>
      <h1 className='text-xl md:text-2xl lg:text-3xl mb-4'>
        Inicia sesión
      </h1>

      <div className='w-full mb-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          Correo electrónico

          <input
            type='email'
            name='email'
            id='email'
            required
            placeholder='Escribe tu correo electrónico'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <div className='w-full mb-4'>
        <label className='text-base w-full flex flex-col justify-start items-start gap-1'>
          Contraseña

          <input
            type='password'
            name='password'
            id='password'
            required
            minLength={6}
            placeholder='Escribe tu contraseña'
            className='w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition duration-300 ease-in-out'
          />
        </label>
      </div>

      <SubmitButton text='Iniciar sesión' />

      <div
        className='flex items-end h-8 space-x-1'
        aria-live='polite'
        aria-atomic='true'
      >
        {errorMessage && (
          <p className='text-sm text-red-500'>{errorMessage}</p>
        )}
      </div>

      <div className='w-full flex justify-center'>
        <Link href='/sign-up'>
          ¿No tienes cuenta? <span className='text-sky-600 font-semibold'>Regístrate</span>
        </Link>
      </div>
    </form>
  )
}
