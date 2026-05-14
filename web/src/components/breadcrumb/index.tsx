'use client'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useParams } from 'next/navigation'

const breadcrumbMap = {
  'stillas-og-stiger': 'Stillas og stiger',
  tilhengar: 'Tilhengar',
  verktoy: 'Verktøy',
}
export default function PageBreadcrumb() {
  const { slug } = useParams()
  console.log(slug)
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-xs">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Hjem</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/utleige">Alle kategorier</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className=" font-semibold">
            {breadcrumbMap[slug as keyof typeof breadcrumbMap]}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
