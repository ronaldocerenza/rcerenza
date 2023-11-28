import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Ronaldo Cerenza',
  description: 'Programador FullStack e Ciêntista de Dados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
