import type { Metadata } from 'next'
import './globals.css'
import Header from './Header'
import Footer from './Footer'

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
      <body className='bg-BaseBlack ' suppressHydrationWarning={true}>
        <Header />{children}
        <Footer /></body>
    </html>
  )
}
