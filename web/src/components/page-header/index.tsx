import Container from '../wrapper/container'
type Props = {
  label?: string
  title: string
  subtitle?: string
}
export default function PageHeader({ label, title, subtitle }: Props) {
  return (
    <Container className="flex flex-col gap-2 mb-6">
      {label && <span className="link-brand uppercase">{label}</span>}
      <p className="text-3xl title max-w-sm">{title}</p>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </Container>
  )
}
