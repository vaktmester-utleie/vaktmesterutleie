import FormWrapper from '@/components/forms/form-wrapper'
import PageHeader from '@/components/page-header'
import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import ContactInfo from '@/features/kontakt/components/contact-info'

export default function Page() {
  return (
    <Section className="page-section">
      <Section constraint>
        {' '}
        <PageHeader
          label="kontakt oss"
          title="Ta kontakt —
me svarer raskt
"
          subtitle="Fyll ut skjemaet nedanfor eller ring oss direkte. Uforpliktande tilbod innan 24 timar."
        />
        <Container className="flex gap-4 justify-between">
          <FormWrapper />
          <ContactInfo />
        </Container>
      </Section>
    </Section>
  )
}
