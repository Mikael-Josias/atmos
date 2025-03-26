import type { Metadata } from "next"
import { Inconsolata, Inter, Alexandria } from "next/font/google"
import "./globals.css"

const geistSans = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
})

const geistMono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistAlexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Atmos: Previsão do Tempo",
  description: "Veja o tempo e clima de qualquer lugar do mundo.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistAlexandria.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
