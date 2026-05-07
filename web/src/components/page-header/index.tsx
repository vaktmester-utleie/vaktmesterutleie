import Container from '../wrapper/container'
type Props = {
  label: string
  title: string
  subtitle?: string
}
export default function PageHeader({ label, title, subtitle }: Props) {
  return (
    <Container>
      <span className=" uppercase text-brand-500 text-xs font-medium">
        {label}
      </span>
      <p className="text-2xl title">{title}</p>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </Container>
  )
}
