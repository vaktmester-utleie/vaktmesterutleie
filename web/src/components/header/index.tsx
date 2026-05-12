'use client'
import { useState } from 'react'
import DesktopNavigation from '../navigation/desktop-navigation'
import MobileNavigation from '../navigation/mobile-navigation'
import Container from '../wrapper/container'
import Hamburger from './hamburger'
import Logo from './logo'

export default function Header() {
  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)
  return (
    <header className="border-b  py-4 px-4">
      <Container className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <Logo />

        <Container>
          <DesktopNavigation />
          <Container className="md:hidden block">
            <Hamburger onOpen={onOpen} />
            <MobileNavigation open={open} onClose={onClose} />
          </Container>
        </Container>
      </Container>
    </header>
  )
}
