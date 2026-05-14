import Card from '@/components/card'
import { client } from '@/sanity/client'
import { RENTAL_BY_CATEGORY_QUERY } from '@/sanity/queries'
import { Rental } from '@/sanity/types'
import RentalMetaData from './rental-availability'
import NavigationLink from '@/components/navigation-link'
import Link from 'next/link'

export default async function RentalCard({ slug }: { slug: string }) {
  const item: Rental[] = await client.fetch(RENTAL_BY_CATEGORY_QUERY, { slug })
  const sorted = [...item].sort((a, b) =>
    a.available === b.available ? 0 : a.available ? -1 : 1
  )
  return (
    <>
      {sorted.map((data) => (
        <Card
          key={data._id}
          image={data.image}
          className="h-full flex flex-col"
        >
          <RentalMetaData available={data.available} />
          <div className="flex flex-col px-5 py-5 pb-6 flex-1">
            <div className="flex-1">
              <p className="card-title">{data.title}</p>
              {data.specs && <p className="card-subtitle mt-1">{data.specs}</p>}
            </div>

            <div className="flex justify-between items-end mt-auto pt-4">
              <div className="flex flex-col gap-0.5">
                {(data.pricePerDay ?? 0) > 0 && (
                  <p className="card-subtitle">
                    <span className="font-semibold"> {data.pricePerDay}</span>
                    kr / dag
                  </p>
                )}
                {(data.pricePerWeek ?? 0) > 0 && (
                  <p className="card-subtitle">
                    <span className="font-semibold">{data.pricePerWeek}</span>{' '}
                    kr / veke
                  </p>
                )}
              </div>
              {data.available && (
                <>
                  <NavigationLink>Bestill</NavigationLink>
                  <Link
                    href={`/kontakt?utstyr=${data.title}`}
                    className="absolute inset-0"
                  />
                </>
              )}
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}
