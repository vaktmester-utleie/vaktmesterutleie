import Link from 'next/link'
import { navigationItems } from './navigation-items'

export default function DesktopNavigation() {
  return (
    <nav className="hidden md:flex justify-between">
      <ul className="flex gap-4">
        {navigationItems.map((item) => (
          <li
            className="text-sm text-gray-600 hover:text-gray-900"
            key={item.id}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
