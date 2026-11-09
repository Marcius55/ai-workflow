import '../BookingComponents.css'

export function Tag({ label = '30 min' }: { label?: string }) {
  return <span className="tag" data-node-id="3:27">{label}</span>
}
