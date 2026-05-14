export default function CardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-md border border-neutral-200 overflow-hidden animate-pulse"
        >
          <div className="h-[260px] w-full bg-gray-200" />

          <div className="px-5 py-5 flex flex-col gap-3">
            <div className="h-5 w-2/3 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-4/5 bg-gray-200 rounded" />
            <div className="h-4 w-1/3 bg-gray-200 rounded mt-4" />
          </div>
        </div>
      ))}
    </>
  )
}
