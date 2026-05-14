import Card from '@/components/card'
import NavigationLink from '@/components/navigation-link'
import { client } from '@/sanity/client'
import { CATEGORY_QUERY } from '@/sanity/queries'
import { Category } from '@/sanity/types'
import Link from 'next/link'

export default async function RentalCategoryCard() {
  const categories: Category[] = await client.fetch(CATEGORY_QUERY)

  return (
    <>
      {categories.map((data) => (
        <Card key={data._id} image={data.image}>
          <div className=" flex flex-col flex-1 px-4 py-8">
            <NavigationLink>{data.title}</NavigationLink>
            <Link
              className="absolute inset-0"
              href={`/utleige/${data.slug.current}`}
            />
          </div>
        </Card>
      ))}
    </>
  )
}
