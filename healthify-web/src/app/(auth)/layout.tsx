import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthify | Autenticate',
}

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  )
}
