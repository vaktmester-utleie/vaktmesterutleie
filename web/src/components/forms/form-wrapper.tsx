'use client'
import { Suspense, useState } from 'react'
import ServiceForm from './service-form'
import RentalForm from './rental-form'
import Container from '../wrapper/container'
import { Button } from '../ui/button'
import { Truck, Wrench } from 'lucide-react'
export default function FormWrapper() {
  const [showForm, setShowForm] = useState(false)

  return (
    <Container className="max-w-3xl grow">
      <Container className="flex gap-2">
        <Button
          className="grow cursor-pointer"
          onClick={() => setShowForm(false)}
          variant={!showForm ? 'outline' : 'ghost'}
        >
          <Truck />
          <span> Utleigeførespurnad</span>
        </Button>
        <Button
          className="grow cursor-pointer"
          onClick={() => setShowForm(true)}
          variant={showForm ? 'outline' : 'ghost'}
        >
          <Wrench />
          <span> Vaktmeister / Drone</span>
        </Button>
      </Container>
      <Suspense fallback={null}>
        <Container>{showForm ? <ServiceForm /> : <RentalForm />}</Container>
      </Suspense>
    </Container>
  )
}
