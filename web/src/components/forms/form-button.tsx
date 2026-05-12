import { Button } from '../ui/button'
import { Send } from 'lucide-react'
export default function FormButton({ label }: { label: string }) {
  return (
    <Button className="flex gap-2  w-full cursor-pointer" type="submit">
      <Send />
      <span className="font-semibold  tracking-wider"> {label}</span>
    </Button>
  )
}
