'use client'

import './Switch.css'

interface SwitchProps {
  checked: boolean
  onChange: () => void
}

export default function Switch({ checked, onChange }: SwitchProps) {
  return (
    <>
      <label className='switch'>
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />

        <div className='slider' />

        <div className='slider-card'>
          <div className='slider-card-face slider-card-front' />
          <div className='slider-card-face slider-card-back' />
        </div>
      </label>
    </>
  )
}
