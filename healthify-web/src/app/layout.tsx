import './globals.css'

import type { Metadata } from 'next'

import { montserrat } from '@/custom/fonts'
import Background from '@/components/ui/Background'
import NavBar from '@/components/ui/NavBar'
import { auth } from '@/auth'

export const metadata: Metadata = {
  title: 'Healthify',
  description: 'Healthify una aplicación para ayudarte a detectar enfermedades a tiempo para una pronta atención'
}

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  const session = await auth()

  return (
    <html lang='es'>
      <body className={montserrat.className}>
        <Background />
        <NavBar isLogged={session != null} />

        <main className='w-full'>
          <section className='w-[90%] max-w-[1200px] mx-auto'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
