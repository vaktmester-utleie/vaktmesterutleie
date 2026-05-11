import Card from '@/components/card'
import Container from '@/components/wrapper/container'
import { client } from '@/sanity/client'
import { RENTAL_BY_CATEGORY_QUERY } from '@/sanity/queries'
import { Rental } from '@/sanity/types'
import RentalMetaData from './rental-availability'
import NavigationLink from '@/components/navigation-link'

export default async function RentalCard({ slug }: { slug: string }) {
  const item: Rental[] = await client.fetch(RENTAL_BY_CATEGORY_QUERY, { slug })
  return (
    <>
      {item.map((data) => (
        <Card key={data._id} image={data.image}>
          <RentalMetaData available={data.available} />

          <Container className="flex flex-col gap-4 flex-1 p-4">
            {' '}
            <Container>
              <p className="card-title">{data.title}</p>
              {data.specs && <p className="card-subtitle">{data.specs}</p>}
            </Container>
            <Container className="flex justify-between items-start">
              <Container className="flex flex-col">
                {data.pricePerDay && (
                  <p>
                    <span className="font-semibold">{data.pricePerDay} kr</span>{' '}
                    <span className="card-subtitle">/ dag</span>
                  </p>
                )}
                {data.pricePerWeek && (
                  <p>
                    <span className="font-semibold">
                      {data.pricePerWeek} kr
                    </span>
                    <span className="card-subtitle">/ uke</span>
                  </p>
                )}
              </Container>
              <NavigationLink href="">Bestill</NavigationLink>
            </Container>
          </Container>
        </Card>
      ))}
    </>
  )
}
