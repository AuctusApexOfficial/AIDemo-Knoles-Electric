"use client"
import { Globe, Zap, Shield, Smartphone, Search, TrendingUp, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function SitiWeb() {
  const { t } = useLanguage()
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const services = [
    {
      icon: <Globe className="text-brown" size={32} />,
      title: t("siti-web.service1.title"),
      description: t("siti-web.service1.description"),
      features: [
        "Da 2 a 10+ pagine personalizzate",
        "Design raffinato ed elegante",
        "Ottimizzazione SEO integrata",
        "Testi professionali e strutturati per la conversione",
        "Struttura pensata per guidare l'utente verso il contatto",
      ],
    },
    {
      icon: <Smartphone className="text-brown" size={32} />,
      title: t("siti-web.service2.title"),
      description: t("siti-web.service2.description"),
      features: [
        "Cataloghi da pochi a centinaia di prodotti",
        "Sistemi di pagamento multipli (anche crypto nel pacchetto Platinum)",
        "Checkout ottimizzati",
        "Backend intuitivo e facile da gestire",
        "Booking engine su misura per hotel, catering e ristorazione",
      ],
    },
    {
      icon: <Zap className="text-brown" size={32} />,
      title: t("siti-web.service3.title"),
      description: t("siti-web.service3.description"),
      features: [
        "Animazioni 3D, parallax, narrazione interattiva",
        "Esperienze visive immersive",
        "Ideali per luxury brands, eventi esclusivi e agenzie di prestigio",
      ],
    },
    {
      icon: <Shield className="text-brown" size={32} />,
      title: t("siti-web.service4.title"),
      description: t("siti-web.service4.description"),
      features: [
        "Login utenti e dashboard dinamiche",
        "Gestione ordini, clienti o contenuti",
        "Soluzioni costruite intorno al tuo workflow",
      ],
    },
  ]

  const stats = [
    { value: "94%", description: t("siti-web.stat1") },
    { value: "75%", description: t("siti-web.stat2") },
    { value: "300%", description: t("siti-web.stat3") },
    { value: "<3s", description: t("siti-web.stat4") },
  ]

  const whyChooseUs = [
    "Design su misura & branding elegante",
    "Tempi di consegna rapidi (anche 7 giorni)",
    "Integrazioni con CRM, chatbot, email & AI",
    "Team trilingue con esperienza tra USA ed Europa",
    "Assistenza 24/7 e aggiornamenti inclusi",
    "Possibilità di lavorare con fino a 600 prodotti e 12+ metodi di pagamento",
    "Soluzioni scalabili da startup a enterprise",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home Button */}
      <div className="fixed top-20 left-4 lg:left-6 z-40">
        <Link
          href="/"
          className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-all duration-700 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-100 shadow-sm hover:shadow-md hover:scale-102"
        >
          <ArrowLeft size={14} />
          <span className="text-xs font-light tracking-wide">{t("common.back")}</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        {/* Enhanced background pattern with animation */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-brown rounded-full blur-3xl animate-pulse-slow-delayed"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 lg:px-6 text-center">
          <div className="section-divider mb-6 scroll-animate fade-up">
            <span className="bg-white px-4 text-gold text-xs font-medium tracking-widest uppercase">
              {t("siti-web.hero.subtitle")}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight scroll-animate fade-up delay-200">
            {t("siti-web.hero.title")
              .split(" ")
              .map((word, index) => {
                if (word === "Velocità" || word === "Speed") {
                  return (
                    <span key={index} className="flowing-text italic font-serif">
                      {word}
                    </span>
                  )
                }
                return word + " "
              })}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light scroll-animate fade-up delay-400">
            {t("siti-web.hero.description")}
          </p>

          <div className="max-w-3xl mx-auto scroll-animate fade-up delay-600">
            <div className="section-divider mb-6">
              <span className="bg-white px-4 text-gold text-xs font-medium tracking-widest uppercase">
                {t("siti-web.hero.solutions")}
              </span>
            </div>

            <div className="bg-beige/50 rounded-none p-8 border border-gold/20 hover:shadow-lg transition-all duration-1000 hover:scale-102">
              <p className="text-gray-700 text-base leading-relaxed font-light">
                {t("siti-web.hero.solutions.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-beige/30 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gold/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brown/5 rounded-full animate-float-reverse"></div>

        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`luxury-card bg-white rounded-none p-8 scroll-animate ${
                  index % 2 === 0 ? "slide-left" : "slide-right"
                } hover:scale-102 transition-all duration-1000 hover:shadow-lg group`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-all duration-700 group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-gold transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${index * 150 + idx * 80}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700 font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-brown rounded-full blur-3xl"></div>
        </div>

        {/* Very subtle grid background with center cancelling borders */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
          linear-gradient(rgba(184, 134, 89, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(184, 134, 89, 0.08) 1px, transparent 1px)
        `,
              backgroundSize: "60px 60px",
            }}
          ></div>
          {/* Center cancelling border - vertical */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-32 bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
          {/* Center cancelling border - horizontal */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-32 bg-gradient-to-b from-transparent via-white/90 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-12 scroll-animate fade-up">
            <div className="section-divider mb-6">
              <span className="bg-white px-4 text-gold text-xs font-medium tracking-widest uppercase">
                {t("siti-web.optimization.title")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              {t("siti-web.optimization.subtitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search className="text-brown" size={24} />, title: "Setup SEO tecnico + struttura blog" },
              { icon: <Zap className="text-brown" size={24} />, title: "Performance elevate (Google Lighthouse 90+)" },
              {
                icon: <Smartphone className="text-brown" size={24} />,
                title: "Mobile Optimization & caching avanzato",
              },
              { icon: <Shield className="text-brown" size={24} />, title: "HTTPS, backup, monitoraggio continuo" },
              {
                icon: <TrendingUp className="text-brown" size={24} />,
                title: "Aggiornamenti illimitati inclusi con il nostro Care Package",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="luxury-card bg-white p-6 rounded-none text-center scroll-animate scale-up hover:scale-105 transition-all duration-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-all duration-500 group-hover:rotate-6">
                  {item.icon}
                </div>
                <p className="text-gray-700 font-light leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-500">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-beige/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-gold rounded-full animate-ping"></div>
          <div
            className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-brown rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gold/50 rounded-full animate-ping"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 scroll-animate fade-up">
            <div className="section-divider mb-6">
              <span className="bg-beige px-4 text-gold text-xs font-medium tracking-widest uppercase">
                {t("siti-web.stats.title")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center scroll-animate bounce-in group hover:scale-105 transition-all duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl font-serif font-bold text-gold mb-2 group-hover:text-brown transition-colors duration-500 animate-counter">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-light leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-20 w-40 h-40 bg-brown rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gold rounded-full blur-3xl"></div>
        </div>

        {/* Very light grid background with center cancelling borders */}
        <div className="absolute inset-0 opacity-2">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
          linear-gradient(rgba(184, 134, 89, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(184, 134, 89, 0.04) 1px, transparent 1px)
        `,
              backgroundSize: "60px 60px",
            }}
          ></div>
          {/* Center cancelling border - vertical */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-32 bg-gradient-to-r from-transparent via-white/95 to-transparent"></div>
          {/* Center cancelling border - horizontal */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-32 bg-gradient-to-b from-transparent via-white/95 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-12 scroll-animate fade-up">
            <div className="section-divider mb-6">
              <span className="bg-white px-4 text-gold text-xs font-medium tracking-widest uppercase">
                {t("siti-web.why.title")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center scroll-animate slide-right hover:bg-beige/20 p-3 rounded-lg transition-all duration-500 group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Award className="text-gold mr-3 group-hover:scale-110 transition-transform duration-500" size={16} />
                <span className="text-gray-700 font-light group-hover:text-gray-900 transition-colors duration-500">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beige/30 relative overflow-hidden">
        {/* Animated CTA background */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-gold/3 via-transparent to-brown/3 animate-gradient-x"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="section-divider mb-6 scroll-animate fade-up">
            <span className="bg-beige px-4 text-gold text-xs font-medium tracking-widest uppercase">
              {t("siti-web.cta.subtitle")}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 scroll-animate fade-up delay-200">
            {t("siti-web.cta.title")}
          </h2>

          <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed scroll-animate fade-up delay-400">
            {t("siti-web.cta.description")}
          </p>

          <div className="scroll-animate scale-up delay-600">
            <a
              href="https://auctusapex.it/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gold/30 hover:bg-gold/5 hover:scale-102 transition-all duration-700 cursor-pointer"
            >
              <span className="text-gold font-medium">{t("siti-web.cta.button")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
