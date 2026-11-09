import type { InputHTMLAttributes } from 'react'
import '../BookingComponents.css'

export function Input({ focus = false, label = 'Your name', placeholder = 'First and last name', error, ...props }: InputHTMLAttributes<HTMLInputElement> & { focus?: boolean; label?: string; error?: string }) {
  const errorId = props.name ? `${props.name}-error` : undefined
  return <label className="booking-input">{label}<input className={focus ? 'focus-preview' : ''} placeholder={placeholder} autoComplete="name" aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined} {...props} />{error && <span id={errorId} className="field-error" role="alert">{error}</span>}</label>
}
