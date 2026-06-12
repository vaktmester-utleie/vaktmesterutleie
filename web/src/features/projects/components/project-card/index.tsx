import { Project } from '@/sanity/types'
import ProjectCarouselCard from './card'
import { client } from '@/sanity/client'
import { PROJECT_QUERY } from '@/sanity/queries'

export default async function ProjectCard() {
  const data: Project[] = await client.fetch(PROJECT_QUERY)

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item) => (
        <ProjectCarouselCard key={item._id} item={item} />
      ))}
    </ul>
  )
}
