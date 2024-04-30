import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
}

export function Button({ children, className, variant = 'primary', ...rest }: Props) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center justify-center rounded-lg px-4 text-base font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
        variant === 'primary' ? 'bg-sky-600 hover:bg-sky-500 active:sky-red-700 focus-visible:outline-sky-600' : 'bg-red-600 hover:bg-red-500 active:bg-red-700 focus-visible:outline-red-600',
      )}
    >
      {children}
    </button>
  )
}
