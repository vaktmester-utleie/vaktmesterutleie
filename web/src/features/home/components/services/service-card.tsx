import Card from '@/components/card'
import NavigationLink from '@/components/navigation-link'
import Pill from '@/components/pill'
import Container from '@/components/wrapper/container'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'
import { Image } from 'next-sanity/image'

export default async function ServiceCard() {
  const service: Service[] = await client.fetch(SERVICE_QUERY)

  return (
    <Container className="grid grid-cols-3 gap-4">
      {service.map((data) => (
        <Card key={data._id}>
          <Image
            className="rounded-tl-lg rounded-tr-lg h-[260px] w-full object-cover"
            src={urlFor(data.image.image).width(800).url()}
            alt={data.image.alt as string}
            width={500}
            height={500}
          />
          <Container className="p-4 flex flex-col flex-1">
            <Container className="flex-1">
              <p className="card-title">{data.title}</p>
              <p className="card-subtitle">{data.description}</p>
            </Container>

            <Container className="flex gap-1 flex-wrap mt-4">
              {data.tags.map((t, i) => (
                <Pill key={i}>{t}</Pill>
              ))}
            </Container>

            <NavigationLink className="my-8  self-start" href="">
              {data.cta}
            </NavigationLink>
          </Container>
        </Card>
      ))}
    </Container>
  )
}
