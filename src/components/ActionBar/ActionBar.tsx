import '../BookingComponents.css'
import { Button } from '../Button/Button'

export function ActionBar({ onBook, label = 'Book this repair' }: { onBook?: () => void; label?: string }) {
  return <footer className="action-bar" data-node-id="11:37"><Button onClick={onBook}>{label}</Button></footer>
}
