import DesktopNavigation from '../navigation/desktop-navigation'
import Container from '../wrapper/container'
import HeaderCTA from './cta'
import Logo from './logo'

export default function Header() {
  return (
    <header className="border-b  py-4">
      <Container className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <Logo />
        <DesktopNavigation />
        <HeaderCTA />
      </Container>
    </header>
  )
}
