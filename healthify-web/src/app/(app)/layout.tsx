interface Props {
  children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <div>
      <h1>App</h1>
      {children}
    </div>
  )
}
