import { cn } from '@/lib/utils'

export default function RentalAvailability({
  available,
}: {
  available: boolean
}) {
  return (
    <span
      className={cn(
        'absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full text-xs font-medium',
        available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
      )}
    >
      {available ? 'Ledig' : 'Utleid'}
    </span>
  )
}
