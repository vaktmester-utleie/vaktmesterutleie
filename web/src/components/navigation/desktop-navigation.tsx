import Link from 'next/link'
import { navigationItems } from './navigation-items'

export default function DesktopNavigation() {
  return (
    <nav className="flex justify-between w-ful ">
      <ul className="flex gap-4">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
