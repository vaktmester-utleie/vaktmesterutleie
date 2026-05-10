export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs bg-gray-100 text-gray-500 border border-gray-200 py-1 px-2 rounded-full tracking-wide">
      {children}
    </span>
  )
}
