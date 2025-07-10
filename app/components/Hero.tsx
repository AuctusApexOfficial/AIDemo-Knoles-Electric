"use client"
import { useLanguage } from "../contexts/LanguageContext"

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-brown rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 lg:px-6 text-center">
        <div className="section-divider mb-6">
          <span className="bg-white px-4 text-gold text-xs font-medium tracking-widest uppercase">
            {language === "en" ? "AUCTUS APEX USA" : "AUCTUS APEX ITALIA"}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          {t("hero.title")
            .split(" ")
            .map((word, index) => {
              if (word === "Digitale" || word === "Digital") {
                return (
                  <span key={index} className="flowing-text italic font-serif">
                    {word}
                  </span>
                )
              }
              return word + " "
            })}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          {t("hero.description")}
        </p>

        {/* Chi siamo section */}
        <div className="max-w-3xl mx-auto">
          <div className="section-divider mb-6">
            <span className="bg-white px-4 text-gold text-xs font-medium tracking-widest uppercase">
              {t("hero.about.title")}
            </span>
          </div>

          <div className="bg-beige/50 rounded-none p-8 border border-gold/20">
            <p className="text-gray-700 text-base leading-relaxed font-light">{t("hero.about.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
