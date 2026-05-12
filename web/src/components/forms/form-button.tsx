import { Button } from '../ui/button'
import { Send } from 'lucide-react'
export default function FormButton({ label }: { label: string }) {
  return (
    <Button
      className="flex gap-2 bg-brand-500   w-full hover:cursor-pointer hover:bg-brand-500/90"
      type="submit"
    >
      <Send />
      <span className="font-semibold  tracking-wider"> {label}</span>
    </Button>
  )
}
