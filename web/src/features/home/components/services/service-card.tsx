import Card from '@/components/card'
import NavigationLink from '@/components/navigation-link'
import Pill from '@/components/pill'
import Container from '@/components/wrapper/container'
import { client } from '@/sanity/client'
import { SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'

export default async function ServiceCard() {
  const service: Service[] = await client.fetch(SERVICE_QUERY)

  return (
    <>
      {service.map((data) => (
        <Card key={data._id} image={data.image}>
          <Container>
            <p className="card-title">{data.title}</p>
            <p className="card-subtitle">{data.description}</p>
          </Container>

          <Container>
            <Container className="flex gap-1 flex-wrap">
              {data.tags.map((t, i) => (
                <Pill key={i}>{t}</Pill>
              ))}
            </Container>

            <NavigationLink href="" className="absolute bottom-5  z-[1000]">
              {data.cta}
            </NavigationLink>
          </Container>
        </Card>
      ))}
    </>
  )
}
