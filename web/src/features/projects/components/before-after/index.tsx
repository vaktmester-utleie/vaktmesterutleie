'use client'

import { urlFor } from '@/sanity/image'
import { ImageWithAlt } from '@/sanity/types'
import { Image } from 'next-sanity/image'
import { ChevronsLeftRight } from 'lucide-react'
import { useRef, useState, useCallback } from 'react'

export default function BeforeAfter({
  before,
  after,
}: {
  before: ImageWithAlt
  after: ImageWithAlt
}) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-md"
      onMouseDown={(e) => {
        dragging.current = true
        move(e.clientX)
      }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <Image
        src={urlFor(after.image).width(1400).url()}
        fill
        className="object-cover"
        alt={after.alt ?? 'Etter'}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={urlFor(before.image).width(1400).url()}
          fill
          className="object-cover"
          alt={before.alt ?? 'Før'}
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
        Før
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
        Etter
      </span>

      <div
        className="absolute inset-y-0 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-700 shadow">
          <ChevronsLeftRight size={16} />
        </div>
      </div>
    </div>
  )
}
