import './globals.css'

import type { Metadata } from 'next'
import { montserrat } from '@/custom/fonts'

export const metadata: Metadata = {
  title: 'Healthify',
  description: 'Healthify una aplicación para ayudarte a detectar enfermedades a tiempo para una pronta atención',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
