import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DrrDynam1X - Roblox Developer',
  description: 'Roblox Developer Portfolio - Scripter, UI Designer, Voice Actor, and Tester',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
