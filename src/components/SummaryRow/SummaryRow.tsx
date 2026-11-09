import '../BookingComponents.css'

export function SummaryRow({ label = 'Service', value = 'Flat tyre repair' }: { label?: string; value?: string }) {
  return <div className="summary-row" data-node-id="11:34"><span>{label}</span><span>{value}</span></div>
}
