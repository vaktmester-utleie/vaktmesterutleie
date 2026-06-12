import PageHeader from '@/components/page-header'
import ProjectCardSkeleton from '@/components/skeleton/project'
import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import ProjectCard from '@/features/projects/components/project-card'
import { client } from '@/sanity/client'
import { PROJECT_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import { Metadata } from 'next'
import { Suspense } from 'react'
export const metadata: Metadata = {
  title: 'Prosjekt',
  description:
    'Sjå tidlegare arbeid — renovering, vedlikehald og droneinspeksjon i Osterøy og Bergen.',
}
export default async function Page() {
  const data: Project[] = await client.fetch(PROJECT_QUERY)
  if (data.length === 0)
    return (
      <Section className="flex flex-col gap-14 min-h-screen pb-40">
        <Container className="bg-white border-b py-20">
          <Section constraint>
            <PageHeader
              title="Prosjektgalleri"
              label="tidlegare arbeid"
              subtitle="Sjå før- og etterbilete frå prosjekt me har gjennomført."
            />
          </Section>
        </Container>
        <Container className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-2xl font-semibold text-neutral-800">
            Ingen prosjekt endå
          </p>
          <p className="mt-2 text-neutral-500">
            Kjem snart — sjekk igjen seinare.
          </p>
        </Container>
      </Section>
    )
  return (
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <Container className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader
            title="Prosjektgalleri"
            label="tidlegare arbeid"
            subtitle="Sjå før- og etterbilete frå prosjekt me har gjennomført."
          />
        </Section>
      </Container>
      <Section constraint>
        <Suspense fallback={<ProjectCardSkeleton count={6} />}>
          <ProjectCard />
        </Suspense>
      </Section>
    </Section>
  )
}
