import FormWrapper from '@/components/forms/form-wrapper'
import PageHeader from '@/components/page-header'
import Container from '@/components/wrapper/container'
import Section from '@/components/wrapper/section'
import ContactInfo from '@/features/kontakt/components/contact-info'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Ta kontakt for uforpliktande tilbod.',
}
export default function Page() {
  return (
    <Section className="min-h-screen page-section pb-40 md:max-w-2xl  grow mx-auto">
      <Section constraint>
        {' '}
        <PageHeader
          label="kontakt oss"
          title="Ta kontakt —
me svarer raskt
"
          subtitle="Fyll ut skjemaet nedanfor eller ring oss direkte. Uforpliktande tilbod innan 24 timar."
        />
        <Container className="flex py-4 gap-8 justify-between flex-col o">
          <FormWrapper />
          <ContactInfo />
        </Container>
      </Section>
    </Section>
  )
}
