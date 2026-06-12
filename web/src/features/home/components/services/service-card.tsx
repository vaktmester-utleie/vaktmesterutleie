import Card from '@/components/card'
import NavigationLink from '@/components/navigation-link'
import { Badge } from '@/components/ui/badge'
import { client } from '@/sanity/client'
import { SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'
import Link from 'next/link'

export default async function ServiceCard() {
  const service: Service[] = await client.fetch(SERVICE_QUERY)

  return (
    <>
      {service.map((data) => (
        <Card key={data._id} image={data.image}>
          <div className="flex flex-col gap-2 h-full px-4 pt-4 pb-12">
            {' '}
            <p className="card-title">{data.title}</p>
            <p className="card-subtitle">{data.description}</p>
            <NavigationLink className="mt-4 absolute bottom-4 ">
              {data.cta}
            </NavigationLink>
            <Link
              className="absolute inset-0"
              href={data.href ? data.href : ''}
              aria-label={`Gå til ${data.title}`}
            />
          </div>
        </Card>
      ))}
    </>
  )
}
