import Card from '@/components/card'
import { client } from '@/sanity/client'
import { RENTAL_BY_CATEGORY_QUERY } from '@/sanity/queries'
import { Rental } from '@/sanity/types'
import RentalMetaData from './rental-availability'
import NavigationLink from '@/components/navigation-link'
import Link from 'next/link'

export default async function RentalCard({ slug }: { slug: string }) {
  const item: Rental[] = await client.fetch(RENTAL_BY_CATEGORY_QUERY, { slug })
  return (
    <>
      {item.map((data) => (
        <Card key={data._id} image={data.image}>
          <RentalMetaData available={data.available} />
          <div className="flex flex-col gap-4 px-5 py-5 pb-6">
            <div>
              <p className="card-title">{data.title}</p>
              {data.specs && <p className="card-subtitle mt-1">{data.specs}</p>}
            </div>

            <div className="flex justify-between items-end mt-auto border-t pt-4">
              <div className="flex flex-col gap-0.5">
                {data.pricePerDay && (
                  <p>
                    <span className="text-2xl font-bold">
                      {data.pricePerDay}
                    </span>
                    <span className="card-subtitle"> kr / dag</span>
                  </p>
                )}
                {data.pricePerWeek && (
                  <p className="card-subtitle">{data.pricePerWeek} kr / veke</p>
                )}
              </div>
              <NavigationLink>Bestill</NavigationLink>
              <Link
                href={`/kontakt?utstyr=${data.title}`}
                className="absolute inset-0"
              />
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}
