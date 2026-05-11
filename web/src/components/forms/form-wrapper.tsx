'use client'
import { Suspense, useState } from 'react'
import ServiceForm from './service-form'
import RentalForm from './rental-form'
import Container from '../wrapper/container'
import { Button } from '../ui/button'

export default function FormWrapper() {
  const [showForm, setShowForm] = useState(false)

  return (
    <Container>
      <Container className="bg-gray-200 rounded-md p-1">
        <Button
          onClick={() => setShowForm(false)}
          variant={!showForm ? 'default' : 'ghost'}
        >
          Utleigeførespurnad
        </Button>
        <Button
          onClick={() => setShowForm(true)}
          variant={showForm ? 'default' : 'ghost'}
        >
          Vaktmeister / Drone
        </Button>
      </Container>
      <Suspense fallback={null}>
        <Container>{showForm ? <ServiceForm /> : <RentalForm />}</Container>
      </Suspense>
    </Container>
  )
}
