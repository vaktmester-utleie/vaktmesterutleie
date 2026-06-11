import PageHeader from '@/components/page-header'
import ProjectCardSkeleton from '@/components/skeleton/project'
import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import ProjectCard from '@/features/projects/components/project-card'
import { Metadata } from 'next'
import { Suspense } from 'react'
export const metadata: Metadata = {
  title: 'Prosjekt',
  description:
    'Sjå tidlegare arbeid — renovering, vedlikehald og droneinspeksjon i Osterøy og Bergen.',
}
export default function Page() {
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
