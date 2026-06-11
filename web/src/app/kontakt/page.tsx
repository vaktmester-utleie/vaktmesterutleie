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

type SearchParams = {
  searchParams: {
    tag: string
  }
}
export default async function Page({ searchParams }: SearchParams) {
  const { tag } = await searchParams

  if (!tag)
    return (
      <Section className="flex flex-col gap-14 min-h-screen pb-40">
        <Container className="bg-white border-b py-20">
          <Section constraint>
            {' '}
            <PageHeader
              label="kontakt oss"
              title="Me svarer raskt
"
              subtitle="Fyll ut skjemaet nedanfor eller ring oss direkte."
            />
          </Section>
        </Container>
        <Section constraint>
          <Container className="flex py-4 gap-8 justify-between">
            <FormWrapper />
            <div className="h-full hidden md:block">
              <ContactInfo />
            </div>
          </Container>
        </Section>
      </Section>
    )
  return (
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <Container className="bg-white border-b py-20">
        <Section constraint>
          {' '}
          <PageHeader
            label="kontakt oss"
            title="Me svarer raskt
"
            subtitle="Fyll ut skjemaet nedanfor eller ring oss direkte."
          />
        </Section>
      </Container>
      <Section constraint>
        <Container className="flex py-4 gap-8 justify-between">
          <FormWrapper tag={tag} />
          <ContactInfo />
        </Container>
      </Section>
    </Section>
  )
}
