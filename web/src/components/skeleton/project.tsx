export default function ProjectCardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="relative aspect-square animate-pulse overflow-hidden rounded-md bg-gray-200"
        >
          <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6">
            <div className="flex items-center justify-between">
              <div className="h-5 w-2/3 rounded bg-gray-300" />
              <div className="size-4 rounded bg-gray-300" />
            </div>
            <div className="h-3 w-full rounded bg-gray-300" />
            <div className="h-3 w-4/5 rounded bg-gray-300" />
          </div>
        </li>
      ))}
    </ul>
  )
}
