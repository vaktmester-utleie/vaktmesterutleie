import Card from '@/components/card'
import NavigationLink from '@/components/navigation-link'
import Pill from '@/components/pill'
import { client } from '@/sanity/client'
import { SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'

export default async function ServiceCard() {
  const service: Service[] = await client.fetch(SERVICE_QUERY)

  return (
    <>
      {service.map((data) => (
        <Card key={data._id} image={data.image}>
          <div className="flex-1">
            <p className="card-title">{data.title}</p>
            <p className="card-subtitle">{data.description}</p>
            <div className="flex gap-1 flex-wrap mt-3">
              {data.tags.map((t, i) => (
                <Pill key={i}>{t}</Pill>
              ))}
            </div>
          </div>
          <NavigationLink href={data.href ? data.href : ''} className="mt-auto">
            {data.cta}
          </NavigationLink>
        </Card>
      ))}
    </>
  )
}
