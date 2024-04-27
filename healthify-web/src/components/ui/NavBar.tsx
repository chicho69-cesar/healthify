import Link from 'next/link'
import Logo from './Logo'

interface NavBarProps {
  isLogged: boolean
}

export default function NavBar({ isLogged }: NavBarProps) {
  console.log(isLogged)
  
  return (
    <div className='w-full'>
      <header className='w-[90%] max-w-[1200px] mx-auto py-8 flex justify-between items-center gap-4'>
        <Logo />
  
        <nav className='w-full'>
          <ul className='flex justify-end items-center gap-6'>
            {isLogged ? (
              <>
                <li>
                  <Link href='/home' className='text-gray-800 font-medium'>
                    Inicio
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href='/sign-in' className='text-gray-800 font-medium'>
                    Iniciar sesión
                  </Link>
                </li>
      
                <li>
                  <Link href='/sign-up' className='text-gray-800 font-medium'>
                    Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  )
}
