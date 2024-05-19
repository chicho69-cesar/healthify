'use server'

import { signIn as signInAuth, signOut as signOutAuth } from '@/auth'
import { validateEmail, validatePassword } from '@/lib/validations/user-validations'
import { createUser } from '@/services/user-service'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

export async function signIn(prevState: string | undefined, formData: FormData) {
  try {
    await signInAuth('credentials', formData)
    redirect('/home')
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales invalidas.'
        default:
          return 'Algo salio mal.'
      }
    }

    throw error
  }
}

export async function signUp(prevState: string | undefined, formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm-password') as string

    const isValidEmail = validateEmail(email)
    const isValidPassword = validatePassword(password)

    if (!isValidEmail) {
      return 'Email invalido.'
    }

    if (!isValidPassword) {
      return 'Contraseña invalida.'
    }

    if (password !== confirmPassword) {
      return 'Las contraseñas no coinciden.'
    }

    await createUser(name, email, password)

    const data = new FormData()
    data.append('email', email)
    data.append('password', password)

    await signInAuth('credentials', data)
    redirect('/home')
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales inválidas.'
        default:
          return 'Algo salió mal.'
      }
    }

    throw error
  }
}

export async function signOut() {
  await signOutAuth()
}
