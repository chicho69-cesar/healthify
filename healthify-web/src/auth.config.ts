import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  // Definimos las rutas de inicio de sesion, registro y cierre de sesion
  pages: {
    signIn: '/sign-in',
    signOut: '/api/sign-out',
    newUser: '/sign-up',
  },
  callbacks: {
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user
      const isInHome = nextUrl.pathname.startsWith('/home')
      const inInAuthRoute = nextUrl.pathname.startsWith('/sign-in') || nextUrl.pathname.startsWith('/sign-up')

      if (isInHome) {
        if (isLoggedIn) return true
        return false
      }

      if (inInAuthRoute && isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
      }

      return true
    }
  },
  providers: [],
} satisfies NextAuthConfig
