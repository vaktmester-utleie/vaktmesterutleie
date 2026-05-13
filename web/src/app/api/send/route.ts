// app/api/send/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { type } = body

  const isUtleige = type === 'utleige'

  const subject = isUtleige
    ? `Utleigeførespurnad: ${body.utstyr} - ${body.name}`
    : `Førespurnad: ${body.typeteneste} - ${body.name}`

  const text = isUtleige
    ? `
Namn: ${body.name}
Telefon: ${body.telephone}
E-post: ${body.email ?? '-'}
Utstyr: ${body.rental}
Frå: ${body.fraDato ?? '-'}
Til: ${body.tilDato ?? '-'}
Melding: ${body.message ?? '-'}
  `.trim()
    : `
Namn: ${body.name}
Telefon: ${body.telephone}
E-post: ${body.email ?? '-'}
Type teneste: ${body.service}
Oppdrag: ${body.message}
  `.trim()

  try {
    const { error } = await resend.emails.send({
      from: 'Sørås Vaktmesterutleie <onboarding@resend.dev>',
      to: 'jonathan@mjos.no',
      subject,
      text,
    })

    if (error) return Response.json({ error }, { status: 500 })
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
