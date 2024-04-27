/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className='w-4/5 md:w-3/4 mx-auto mt-20'>
      <h3 className='text-center text-2xl font-semibold mb-8'>
        ¿De qué enfermedad te gustaría saber si eres propenso a padecer?
      </h3>

      <section className={styles.grid}>
        <Link
          href='/home/cardiovascular'
          className={`${styles.first} py-2 px-4 text-white text-lg font-semibold rounded-lg shadow-md bg-sky-600 flex justify-center items-center gap-6 flex-wrap transition hover:bg-sky-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:bg-sky-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`}
        >
          Cardiovasculares{' '}
          <img
            src='/cardiovascular.svg'
            alt='Cardiovascular'
            className='w-24 object-cover object-center'
          />
        </Link>
        
        <Link
          href='/home/hypertension'
          className={`${styles.second} py-2 px-4 text-white text-lg font-semibold rounded-lg shadow-md bg-sky-600 flex justify-center items-center gap-6 flex-wrap transition hover:bg-sky-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:bg-sky-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`}
        >
          Hipertensión{' '}
          <img
            src='/hypertension.svg'
            alt='Hipertensión'
            className='w-24 object-cover object-center'
          />
        </Link>
        
        <Link
          href='/home/diabetes'
          className={`${styles.third} py-2 px-4 text-white text-lg font-semibold rounded-lg shadow-md bg-sky-600 flex justify-center items-center gap-6 flex-wrap transition hover:bg-sky-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:bg-sky-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50`}
        >
          Diabetes {' '}
          <img
            src='/diabetes.svg'
            alt='Diabetes'
            className='w-24 object-cover object-center'
          />
        </Link>
      </section>
    </div>
  )
}
