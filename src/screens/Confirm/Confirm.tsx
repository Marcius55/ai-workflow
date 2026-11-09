import { useRef, useState } from 'react'
import { ActionBar, Input, SummaryRow, TopBar } from '../../components'
import '../ChooseAService/ChooseAService.css'
import './Confirm.css'

export function Confirm() {
  const form = useRef<HTMLFormElement>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [errors, setErrors] = useState<{ customerName?: string; phone?: string }>({})
  function clearError(field: 'customerName' | 'phone') {
    setErrors(current => ({ ...current, [field]: undefined }))
    setConfirmed(false)
  }
  const service = JSON.parse(sessionStorage.getItem('spoke-service-detail') || 'null') as { title: string; price: string } | null
  const day = sessionStorage.getItem('spoke-day') || 'Today'
  const time = sessionStorage.getItem('spoke-time') || '16:30'
  return (
    <main className="choose-service confirm-screen" data-node-id="7:128">
      <TopBar step="Step 3 of 3" onBack={() => { window.location.href = '/pick-a-slot' }} />
      <form ref={form} className="choose-service-content" noValidate onSubmit={event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const nextErrors = {
          customerName: String(data.get('customerName') || '').trim() ? undefined : 'Please enter your name.',
          phone: String(data.get('phone') || '').trim() ? undefined : 'Please enter your phone number.',
        }
        setErrors(nextErrors)
        const firstInvalid = nextErrors.customerName ? 'customerName' : nextErrors.phone ? 'phone' : null
        setConfirmed(!firstInvalid)
        if (firstInvalid) event.currentTarget.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus()
      }}>
        <div className="choose-service-heading"><h2>Check and confirm</h2></div>
        <div className="booking-summary">
          <SummaryRow value={service?.title || 'Flat tyre repair'} />
          <SummaryRow label="Drop-off" value={`${day} at ${time}`} />
          <SummaryRow label="Price" value={`${service?.price || '€15'}, pay at pick-up`} />
        </div>
        <Input name="customerName" required autoComplete="name" error={errors.customerName} onChange={() => clearError('customerName')} />
        <Input name="phone" label="Phone number" placeholder="+32 470 12 34 56" type="tel" required autoComplete="tel" focus error={errors.phone} onChange={() => clearError('phone')} />
        <p className="confirm-note">We text you when your bike is ready. You pay when you pick it up.</p>
        {confirmed && <p className="confirm-note" role="status">Booking preview complete. No appointment has been submitted to a repair shop.</p>}
      </form>
      <ActionBar label="Confirm booking" onBook={() => form.current?.requestSubmit()} />
    </main>
  )
}
