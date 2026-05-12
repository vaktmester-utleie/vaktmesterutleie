import { SanityImageSource } from '@sanity/image-url'

export type Service = {
  _id: string
  href: string
  title: string
  image: ImageWithAlt
  tags: string[]
  description: string
  cta: string
}

export type ImageWithAlt = {
  image: SanityImageSource
  alt?: string
}

type Slug = {
  current: string
}

export type Category = {
  _id: string
  title: string
  image: ImageWithAlt
  slug: Slug
}

export type Rental = {
  _id: string
  title: string
  image: ImageWithAlt
  specs: string | null
  available: boolean
  pricePerDay: number | null
  pricePerWeek: number | null
}
