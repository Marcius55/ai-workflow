import { useState } from 'react'
import { ChooseAService } from './screens/ChooseAService/ChooseAService'
import { PickASlot } from './screens/PickASlot/PickASlot'
import { Confirm } from './screens/Confirm/Confirm'
import { ActionBar, Button, Input, ServiceCard, SummaryRow, Tag, TimeSlot, TopBar } from './components'
import './App.css'

function App() {
  const [time, setTime] = useState(1)
  const [service, setService] = useState(1)
  const book = () => window.alert('Repair selected. Booking is a preview; no appointment has been submitted.')
  if (window.location.pathname === '/confirm') return <Confirm />
  if (window.location.pathname === '/pick-a-slot') return <PickASlot />
  if (window.location.pathname !== '/components') return <ChooseAService />
  return (
    <main className="component-sheet" data-node-id="3:25" aria-label="Spoke components">
      <div className="sheet-buttons variant-set"><Button onClick={book} /><Button variant="Secondary" onClick={book} /></div>
      <div className="sheet-tag"><Tag /></div>
      <div className="sheet-times variant-set"><TimeSlot state={time === 0 ? 'Selected' : 'Default'} onClick={() => setTime(0)} /><TimeSlot state={time === 1 ? 'Selected' : 'Default'} onClick={() => setTime(1)} /><TimeSlot state="Disabled" /></div>
      <div className="sheet-inputs variant-set"><Input /><Input focus /></div>
      <div className="sheet-top"><TopBar onBack={() => { setTime(1); setService(1) }} /></div>
      <div className="sheet-services variant-set"><ServiceCard selected={service === 0} onClick={() => setService(0)} /><ServiceCard selected={service === 1} onClick={() => setService(1)} /></div>
      <div className="sheet-summary"><SummaryRow /></div>
      <div className="sheet-action"><ActionBar onBook={book} /></div>
    </main>
  )
}

export default App
