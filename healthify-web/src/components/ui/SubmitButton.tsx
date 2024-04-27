import { useFormStatus } from 'react-dom'
import { Button } from './Button'

interface SubmitButtonProps {
  text: string
}

export default function SubmitButton({ text }: SubmitButtonProps) {
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