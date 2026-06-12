'use client'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationItems } from './navigation-items'
import Image from 'next/image'
import Logo from '../header/logo'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MobileNavigation({ open, onClose }: Props) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <nav
        className={cn(
          'fixed top-0 right-0 z-50 flex h-full w-full flex-col bg-white transition-transform duration-300 ease-in-out sm:w-80',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
          <Logo onClose={onClose} />
          <button
            aria-label="Lukk meny"
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-neutral-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 p-4 flex-1">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-md px-4 py-4 text-lg font-medium text-neutral-800 transition hover:bg-neutral-50"
              >
                {item.label}
                <ArrowRight size={16} className="text-neutral-400" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t p-6">
          <Link
            href="/kontakt"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-6 py-4 text-base font-medium text-white transition hover:bg-neutral-800"
          >
            Få eit gratis tilbod <ArrowRight size={16} />
          </Link>
        </div>
      </nav>
    </>
  )
}
