import { auth } from '@/auth'
import Link from 'next/link'

export default async function AppPage() {
  const session = await auth()

  return (
    <div className='w-4/5 md:w-3/4 lg:w-1/2 mx-auto mt-20'>
      <h3 className='text-2xl text-center mb-12'>
        ¿Te preocupa tu salud? Te ayudamos a ver
        que tan propenso eres para tener ciertas
        enfermedades en base a datos clínicos.
      </h3>

      {session ? (
        <div className='mb-4'>
          <h4 className='text-lg text-center mb-2'>
            Bienvenido,{' '}
            <span className='font-semibold text-sky-700'>
              {session.user?.name}
            </span>
          </h4>

          <p className='text-center mb-4'>
            Puedes comenzar a utilizar la aplicación
            para ver un análisis de tus datos clínicos.
          </p>

          <div className='flex justify-center'>
            <Link href='/home' className='py-2 px-8 rounded-lg bg-sky-600 text-base font-medium text-white transition-colors hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:bg-sky-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
              Comenzar
            </Link>
          </div>
        </div>
      ) : (
        <div className='mb-4'>
          <h4 className='text-lg text-center'>
            ¿Aún no tienes una cuenta? Puedes comenzar creando una o si ya la tienes inicia sesión.
          </h4>

          <div className='flex justify-center gap-4 mt-8'>
            <Link href='/sign-up' className='py-2 px-4 rounded-lg bg-sky-600 text-base font-medium text-white transition-colors hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:bg-sky-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
              Regístrate
            </Link>

            <Link href='/sign-in' className='py-2 px-4 rounded-lg bg-sky-600 text-base font-medium text-white transition-colors hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:bg-sky-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
              Inicia sesión
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
