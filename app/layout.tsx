import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import LanguageToggle from "./components/LanguageToggle"
import { LanguageProvider } from "./contexts/LanguageContext"
import VoiceflowChat from "./components/VoiceflowChat"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "DEMO Knoles Electric",
  description: "AI Chatbot DEMO",
    generator: 'Auctus Apex'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <LanguageToggle />
          <main className="pt-16">{children}</main>
          <VoiceflowChat />
        </LanguageProvider>
      </body>
    </html>
  )
}
