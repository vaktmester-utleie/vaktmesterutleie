import CardContainer from '@/components/card/card-container'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import ProjectCard from '@/features/projects/components/project-card'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Prosjekt',
  description:
    'Sjå tidlegare arbeid — renovering, vedlikehald og droneinspeksjon i Osterøy og Bergen.',
}
export default function Page() {
  return (
    <Section className="page-section min-h-screen pb-40">
      <Section constraint>
        <PageHeader
          title="Prosjektgalleri"
          label="tidlegare arbeid"
          subtitle="Sjå før- og etterbilete frå prosjekt me har gjennomført."
        />
      </Section>
      <Section constraint>
        <CardContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard />
        </CardContainer>
      </Section>
    </Section>
  )
}
