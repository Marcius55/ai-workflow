import '../BookingComponents.css'

export function TopBar({ onBack, step = 'Step 1 of 3' }: { onBack?: () => void; step?: string }) {
  return <header className="top-bar" data-node-id="6:24"><button type="button" className="back-button" aria-label="Back" onClick={onBack}><img src="/chevron-left.svg" alt="" /></button><h1>Book a repair</h1><span>{step}</span></header>
}
