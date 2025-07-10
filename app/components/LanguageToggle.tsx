"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { useEffect, useState } from "react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)

  // Ensure the toggle is always visible and functional
  useEffect(() => {
    const handleScroll = () => {
      // Keep the toggle always visible regardless of scroll position
      setIsVisible(true)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageChange = (newLanguage: "it" | "en") => {
    setLanguage(newLanguage)
    // Force a re-render of the entire page content
    window.dispatchEvent(new Event("languageChanged"))
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 lg:right-6 z-50 flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-100 shadow-sm">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`text-xs font-serif font-light tracking-wide transition-all duration-300 px-2 py-1 rounded-full ${
          language === "en" ? "text-white bg-gold shadow-sm" : "text-gray-600 hover:text-gold hover:bg-gold/10"
        }`}
      >
        English
      </button>
      <div className="w-px h-3 bg-gray-300"></div>
      <button
        onClick={() => handleLanguageChange("it")}
        className={`text-xs font-serif font-light tracking-wide transition-all duration-300 px-2 py-1 rounded-full ${
          language === "it" ? "text-white bg-gold shadow-sm" : "text-gray-600 hover:text-gold hover:bg-gold/10"
        }`}
      >
        Italiano
      </button>
    </div>
  )
}
