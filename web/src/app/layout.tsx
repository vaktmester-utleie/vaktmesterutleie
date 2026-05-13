import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Vaktmesterutleie',
    template: '%s | Vaktmesterutleie',
  },
  description:
    'Vaktmeistertenester, utstyrleige og droneinspeksjon i Osterøy- og Bergenregionen.',
  metadataBase: new URL('https://vaktmesterutleie.no'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn('h-full', 'antialiased', geistSans.className, 'font-sans')}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="grow bg-gray-100/20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
