import FormWrapper from '@/components/forms/form-wrapper'
import PageHeader from '@/components/page-header'

export default function Page() {
  return (
    <div>
      <PageHeader
        label="kontakt oss"
        title="Ta kontakt —
me svarer raskt
"
        subtitle="Fyll ut skjemaet nedanfor eller ring oss direkte. Uforpliktande tilbod innan 24 timar."
      />

      <FormWrapper />
    </div>
  )
}
