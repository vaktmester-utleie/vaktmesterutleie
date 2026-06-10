export default function CardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-md bg-gray-200 animate-pulse"
        >
          {/* badge oppe høgre */}
          <div className="absolute right-4 top-4 h-6 w-16 rounded-full bg-gray-300" />

          {/* innhald nede */}
          <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6">
            {/* tittel + pil på linje */}
            <div className="flex items-center justify-between">
              <div className="h-5 w-2/3 rounded bg-gray-300" />
              <div className="h-4 w-4 rounded bg-gray-300" />
            </div>
            <div className="h-3 w-full rounded bg-gray-300" />
            <div className="h-3 w-4/5 rounded bg-gray-300" />
            <div className="mt-2 h-7 w-1/3 rounded bg-gray-300" />
          </div>
        </li>
      ))}
    </ul>
  )
}
