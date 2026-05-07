import DesktopNavigation from '../navigation/desktop-navigation'
import MobileNavigation from '../navigation/mobile-navigation'
import Container from '../wrapper/container'
import Section from '../wrapper/section'
import HeaderCTA from './cta'
import Logo from './logo'

export default function Header() {
  return (
    <Section>
      <header className="flex justify-between items-center">
        <Logo />
        <DesktopNavigation />
        <HeaderCTA />
      </header>
    </Section>
  )
}
