import Card from '@/components/card'
import NavigationLink from '@/components/navigation-link'
import Container from '@/components/wrapper/container'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { CATEGORY_QUERY } from '@/sanity/queries'
import { Category } from '@/sanity/types'
import { Image } from 'next-sanity/image'

export default async function RentalCategoryCard() {
  const categories: Category[] = await client.fetch(CATEGORY_QUERY)

  return (
    <>
      {categories.map((data) => (
        <Card key={data._id} image={data.image}>
          <Container className=" flex flex-col flex-1">
            <NavigationLink href={`/utleige/${data.slug.current}`}>
              {data.title}
            </NavigationLink>
          </Container>
        </Card>
      ))}
    </>
  )
}
