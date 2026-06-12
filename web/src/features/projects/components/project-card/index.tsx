import { Project } from '@/sanity/types'
import ProjectCarouselCard from './card'
import { client } from '@/sanity/client'
import { PROJECT_QUERY } from '@/sanity/queries'
import Container from '@/components/wrapper/container'

export default async function ProjectCard() {
  const data: Project[] = await client.fetch(PROJECT_QUERY)

  if (data.length === 0)
    return (
      <Container className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-2xl font-semibold text-neutral-800">
          Ingen prosjekt endå
        </p>
        <p className="mt-2 text-neutral-500">
          Kjem snart — sjekk igjen seinare.
        </p>
      </Container>
    )
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item) => (
        <ProjectCarouselCard key={item._id} item={item} />
      ))}
    </ul>
  )
}
