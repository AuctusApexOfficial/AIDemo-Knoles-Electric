"use client"
import Hero from "./components/Hero"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleLanguageChange = () => {
      // Force re-render when language changes
      window.location.reload()
    }

    window.addEventListener("languageChanged", handleLanguageChange)
    return () => window.removeEventListener("languageChanged", handleLanguageChange)
  }, [])

  return <Hero />
}
