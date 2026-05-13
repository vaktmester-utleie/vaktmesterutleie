import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'

export default function Page() {
  return (
    <Section>
      <Section>
        <PageHeader
          title="Prosjektgalleri"
          label="tidlegare arbeid"
          subtitle="Sjå før- og etterbilete frå prosjekt me har gjennomført. Hald musepekaren over bileta for å sjå resultatet."
        />
      </Section>
    </Section>
  )
}
