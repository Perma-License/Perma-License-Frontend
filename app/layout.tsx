import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perma License',
  description: 'Get copyrights for your assets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
