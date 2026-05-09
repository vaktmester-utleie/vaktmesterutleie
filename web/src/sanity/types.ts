import { SanityImageSource } from '@sanity/image-url'

export type Service = {
  _id: string
  title: string
  image: ImageWithAlt
  tags: string[]
  description: string
}

type ImageWithAlt = {
  image: SanityImageSource
  alt?: string
}
