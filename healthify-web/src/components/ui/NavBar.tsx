import Link from 'next/link'
import Logo from './Logo'

export default function NavBar() {
  return (
    <header>
      <Logo />

      <nav>
        <ul>
          <li>
            <Link href='/sign-in'>
              Iniciar sesión
            </Link>
          </li>

          <li>
            <Link href='/sign-up'>
              Registrarse
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
