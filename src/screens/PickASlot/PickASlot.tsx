import { useState } from 'react'
import { ActionBar, TimeSlot, TopBar } from '../../components'
import '../ChooseAService/ChooseAService.css'
import './PickASlot.css'

const days = ['Today', 'Tomorrow', 'Mon 16']
const times = ['09:00', '10:30', '12:00', '14:00', '16:30', '17:30']

export function PickASlot() {
  const [day, setDay] = useState(sessionStorage.getItem('spoke-day') || 'Today')
  const [time, setTime] = useState(sessionStorage.getItem('spoke-time') || '16:30')
  const service = JSON.parse(sessionStorage.getItem('spoke-service-detail') || 'null') as { title: string; duration: string } | null
  const duration = service?.duration === '2 hours' ? '2 hours' : `${service?.duration.replace(' min', '') || '30'} minutes`
  return (
    <main className="choose-service" data-node-id="7:121">
      <TopBar step="Step 2 of 3" onBack={() => { window.location.href = '/' }} />
      <div className="choose-service-content">
        <div className="choose-service-heading"><h2>Pick a drop-off time</h2><p>{service?.title || 'Flat tyre repair'}, about {duration}</p></div>
        <div className="slot-group" role="group" aria-label="Day"><h3>Day</h3><div className="slot-options">{days.map(label => <TimeSlot key={label} label={label} state={day === label ? 'Selected' : 'Default'} onClick={() => { setDay(label); sessionStorage.setItem('spoke-day', label) }} />)}</div></div>
        <div className="slot-group" role="group" aria-label="Drop-off time"><h3>Drop-off time</h3><div className="slot-options">{times.map((label, index) => <TimeSlot key={label} label={label} state={index < 2 ? 'Disabled' : time === label ? 'Selected' : 'Default'} onClick={() => { setTime(label); sessionStorage.setItem('spoke-time', label) }} />)}</div></div>
        <p className="slot-note">Ready the same day. We text you when your bike is done.</p>
      </div>
      <ActionBar label="Continue" onBook={() => { sessionStorage.setItem('spoke-day', day); sessionStorage.setItem('spoke-time', time); window.location.href = '/confirm' }} />
    </main>
  )
}
