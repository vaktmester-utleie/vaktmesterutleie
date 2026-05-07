import Link from 'next/link'
import { navigationItems } from './navigation-items'

export default function MobileNavigation() {
  return (
    <nav>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
