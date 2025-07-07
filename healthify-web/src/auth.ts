import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { getUser } from '@/services/user-service'
import { authConfig } from './auth.config'

const authOptions = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as { email: string, password: string }

        const user = await getUser(email)

        if (!user) {
          return null
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
          return null
        }

        return user
      },
    })
  ]
})

export const { auth, signIn, signOut } = authOptions
// export const getServerAuthSession = () => getServerSession(authOptions)
