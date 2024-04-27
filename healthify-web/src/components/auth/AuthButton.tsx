import { useFormStatus } from 'react-dom'
import { Button } from '../ui/Button'

interface AuthButtonProps {
  text: string
}

export default function AuthButton({ text }: AuthButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      className='w-full mt-4'
      aria-disabled={pending}
      type='submit'
    >
      {text}
    </Button>
  )
}