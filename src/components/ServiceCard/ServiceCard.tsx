import '../BookingComponents.css'
import './ServiceCard.css'
import { Tag } from '../Tag/Tag'

export function ServiceCard({ selected = false, onClick, title = 'Flat tyre repair', price = '€15', description = 'Tube or tyre swap, any wheel size.', duration = '30 min' }: { selected?: boolean; onClick?: () => void; title?: string; price?: string; description?: string; duration?: string }) {
  return <button type="button" className={`service-card ${selected ? 'selected' : ''}`} aria-pressed={selected} onClick={onClick}><span className="service-header"><span>{title}</span><span>{price}</span></span><span className="service-description">{description}</span><Tag label={duration} /></button>
}
