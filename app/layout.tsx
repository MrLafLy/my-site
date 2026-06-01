import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eduard.dev - Portfolio',
  description: 'Eduard\'s portfolio website - Student developer learning web development',
  keywords: ['portfolio', 'developer', 'web development', 'react', 'next.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className="bg-[#070A12] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
