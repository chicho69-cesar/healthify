import Link from "next/link"

interface Props {
  isLink?: boolean
}

export default function Logo({ isLink = true }: Props) {
  return (
    <>
      {isLink ? (
        <Link href='/'>
          <h1>
            Healthi<span>fy</span>
          </h1>
        </Link>
      ) : (
        <h1>
          Healthi<span>fy</span>
        </h1>
      )}
    </>
  )
}
