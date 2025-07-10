"use client"
import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-20 right-4 lg:right-6 z-40 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-100 shadow-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`text-xs font-serif font-light tracking-wide transition-colors duration-300 ${
          language === "en" ? "text-gold" : "text-gray-600 hover:text-gold"
        }`}
      >
        English
      </button>
      <div className="w-px h-3 bg-gray-300"></div>
      <button
        onClick={() => setLanguage("it")}
        className={`text-xs font-serif font-light tracking-wide transition-colors duration-300 ${
          language === "it" ? "text-gold" : "text-gray-600 hover:text-gold"
        }`}
      >
        Italiano
      </button>
    </div>
  )
}
