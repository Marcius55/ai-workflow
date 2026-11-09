import { useState } from 'react'
import { ActionBar, ServiceCard, TopBar } from '../../components'
import './ChooseAService.css'

const services = [
  { title: 'Flat tyre repair', price: '€15', description: 'Tube or tyre swap, any wheel size.', duration: '30 min' },
  { title: 'Brake check and adjust', price: '€25', description: 'Pads, cables and alignment.', duration: '45 min' },
  { title: 'Gear tune-up', price: '€30', description: 'Smooth shifting on every gear.', duration: '45 min' },
  { title: 'Full service', price: '€89', description: 'Everything checked, cleaned and adjusted.', duration: '2 hours' },
]

export function ChooseAService() {
  const [selected, setSelected] = useState(() => Number(sessionStorage.getItem('spoke-service') || 0))
  return (
    <main className="choose-service" data-node-id="7:114">
      <TopBar onBack={() => { window.location.href = '/components' }} />
      <div className="choose-service-content">
        <div className="choose-service-heading"><h2>Choose a service</h2><p>What does your bike need?</p></div>
        <div className="choose-service-list" aria-label="Services">
          {services.map((service, index) => <ServiceCard key={service.title} {...service} selected={selected === index} onClick={() => setSelected(index)} />)}
        </div>
      </div>
      <ActionBar label="Continue" onBook={() => { sessionStorage.setItem('spoke-service', String(selected)); sessionStorage.setItem('spoke-service-detail', JSON.stringify(services[selected])); window.location.href = '/pick-a-slot' }} />
    </main>
  )
}
