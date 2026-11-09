import '../BookingComponents.css'

export function TimeSlot({ state = 'Default', onClick, label = '16:30' }: { state?: 'Default' | 'Selected' | 'Disabled'; onClick?: () => void; label?: string }) {
  return <button type="button" className={`time-slot ${state.toLowerCase()}`} disabled={state === 'Disabled'} aria-pressed={state === 'Selected'} onClick={onClick}>{label}</button>
}
