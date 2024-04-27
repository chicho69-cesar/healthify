import Link from 'next/link'

interface Props {
  isLink?: boolean
}

export default function Logo({ isLink = true }: Props) {
  return (
    <>
      {isLink ? (
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Healthi<span className='font-bold text-sky-600'>fy</span>
          </h1>
        </Link>
      ) : (
        <h1 className='text-4xl font-semibold'>
          Healthi<span className='font-bold text-sky-600'>fy</span>
        </h1>
      )}
    </>
  )
}
