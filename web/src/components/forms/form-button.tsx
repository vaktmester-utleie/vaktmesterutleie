import { Button } from '../ui/button'
import { Send } from 'lucide-react'
export default function FormButton({ label }: { label: string }) {
  return (
    <Button
      className="flex items-center gap-2  w-full cursor-pointer"
      type="submit"
    >
      <span className="font-semibold  tracking-wider"> {label}</span>
      <Send />
    </Button>
  )
}
