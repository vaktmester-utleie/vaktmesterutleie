import Section from '@/components/wrapper/section'

export const metadata = {
  title: 'Personvern',
  description: 'Personvernserklæring for Vaktmesterutleie',
}

export default function PersonvernPage() {
  return (
    <Section className="max-w-2xl mx-auto px-4 pt-16 pb-40">
      <h1 className="text-3xl font-bold mb-8">Personvernserklæring</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Behandlingsansvarleg</h2>
        <p className="text-gray-600">
          Vaktmesterutleie AS
          <br />
          Org.nr: 922 629 102
          <br />
          Vevleheiane 3, 5281 Valestrandfossen
          <br />
          post@vaktmesterutleie.no
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Kva data samlar me inn</h2>
        <p className="text-gray-600">
          Når du fyller ut kontaktskjemaet samlar me inn namn, telefonnummer og
          e-postadresse. Desse opplysningane vert berre nytta for å svare på
          førespurnaden din.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Lagringstid</h2>
        <p className="text-gray-600">
          Me lagrar ikkje personopplysningar utover det som er nødvendig for å
          handsame førespurnaden din. E-postar vert sletta når dei ikkje lenger
          er relevante.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Dine rettar</h2>
        <p className="text-gray-600">
          Du har rett til innsyn i, retting av og sletting av personopplysningar
          me har om deg. Ta kontakt på post@vaktmesterutleie.no for å nytte deg
          av desse rettane.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Tredjepartar</h2>
        <p className="text-gray-600">
          Me nyttar Resend for utsending av e-post. Data kan verte overført til
          USA, men dette er regulert av standard kontraktsklausular (SCC) i
          samsvar med GDPR.{' '}
          <a
            href="https://resend.com/security/gdpr"
            className="link-brand"
            target="_blank"
            rel="noopener"
          >
            Resend sin GDPR-policy
          </a>{' '}
          for meir informasjon. Me deler ikkje personopplysningar med andre
          tredjepartar.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Klage</h2>
        <p className="text-gray-600">
          Dersom du meiner me ikkje handsamar personopplysningane dine i samsvar
          med regelverket, kan du klage til Datatilsynet på{' '}
          <a href="https://www.datatilsynet.no" className="link-brand">
            datatilsynet.no
          </a>
          .
        </p>
      </section>
    </Section>
  )
}
