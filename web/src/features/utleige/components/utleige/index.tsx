import CardContainer from '@/components/card/card-container'
import { Category } from '@/sanity/types'

type Props = {
  children: React.ReactNode
  cols?: string
}
export default function Rental({ children, cols = '3' }: Props) {
  return <CardContainer cols={cols}>{children}</CardContainer>
}
