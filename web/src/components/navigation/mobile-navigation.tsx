'use client'
import Link from 'next/link'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationItems } from './navigation-items'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MobileNavigation({ open, onClose }: Props) {
  return (
    <nav
      className={cn(
        'fixed top-0 right-0  bg-white z-50 transition-transform duration-200 w-full h-full ',
        open ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="flex justify-end py-6 px-6 border-b">
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <ul className="flex flex-col p-4 gap-1">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={onClose}
              className="block py-3 px-2 text-sm font-medium border-b border-gray-100 last:border-0"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
