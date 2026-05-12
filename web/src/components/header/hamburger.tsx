import { Menu } from 'lucide-react'
import { Button } from '../ui/button'

export default function Hamburger({ onOpen }: { onOpen: () => void }) {
  return (
    <Button onClick={() => onOpen()} className="rounded-full" variant="outline">
      <Menu />
    </Button>
  )
}
