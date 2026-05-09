import Card from '@/components/card'
import Container from '@/components/wrapper/container'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'
import { Image } from 'next-sanity/image'

export default async function ServiceCard() {
  const service: Service[] = await client.fetch(SERVICE_QUERY)

  return (
    <Container className="grid grid-cols-3">
      {service.map((data) => (
        <Card key={data._id}>
          <Image
            src={urlFor(data.image.image).width(800).url()}
            alt={data.image.alt as string}
            width={500}
            height={500}
          />
          <p>{data.title}</p>
          <p>{data.description}</p>

          <Container className="flex gap-1">
            {data.tags.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </Container>
        </Card>
      ))}
    </Container>
  )
}
