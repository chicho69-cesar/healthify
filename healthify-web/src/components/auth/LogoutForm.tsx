'use client'

import { signOut } from '@/actions/user-actions'
import { useFormState } from 'react-dom'

export default function LogoutForm() {
  const [errorMessage, dispatch] = useFormState(signOut, undefined)

  return (
    <form action={dispatch}>
      <button className='py-0.5 px-3 rounded-md bg-red-500 text-white shadow-md hover:bg-red-600 hover:scale-105 hover:shadow-none transition'>
        Cerrar sesión
      </button>
    </form>
  )
}
