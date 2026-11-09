import type { ButtonHTMLAttributes } from 'react'
import '../BookingComponents.css'

export function Button({ variant = 'Primary', children = 'Book this repair', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'Primary' | 'Secondary' }) {
  return <button type="button" className={`booking-button ${variant === 'Secondary' ? 'secondary' : ''}`} {...props}>{children}</button>
}
