'use server'

import { signIn as signInAuth, signOut as signOutAuth } from '@/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

export async function signIn(prevState: string | undefined, formData: FormData) {
  try {
    // TODO: Validate form data here
    await signInAuth('credentials', formData)
    redirect('/home')
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
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

    // TODO: Validate form data here
    // Crear usuario en la db

    const data = new FormData()
    data.append('email', email)
    data.append('password', password)

    await signInAuth('credentials', data)
    redirect('/home')
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }

    throw error
  }
}

export async function signOut() {
  await signOutAuth()
}
