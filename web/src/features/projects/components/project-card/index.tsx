import { Project } from '@/sanity/types'
import ProjectCarouselCard from './card'
import { client } from '@/sanity/client'
import { PROJECT_QUERY } from '@/sanity/queries'

export default async function ProjectCard() {
  const data: Project[] = await client.fetch(PROJECT_QUERY)
  return (
    <>
      {data.map((item) => (
        <ProjectCarouselCard key={item._id} item={item} />
      ))}
    </>
  )
}
