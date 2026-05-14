import { Menu } from 'lucide-react'
import { Button } from '../ui/button'

export default function Hamburger({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      aria-label="Open navigation menu"
      onClick={onOpen}
      className="rounded-full"
      variant="outline"
    >
      <Menu size={24} aria-hidden="true" />
    </Button>
  )
}
