"use client"
import {
  Bot,
  Mail,
  FileText,
  Calendar,
  Users,
  Calculator,
  Shield,
  TrendingUp,
  Award,
  ArrowLeft,
  Clock,
  Target,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function AutomazioniAI() {
  const { t } = useLanguage()
  const observerRef = useRef<IntersectionObserver | null>(null)

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
      icon: <Bot className="text-brown" size={32} />,
      title: t("ai.service1.title"),
      description: t("ai.service1.description"),
      features: [
        "Risposte in tempo reale, 24/7",
        "Guida verso prenotazioni, preventivi, o prodotti",
        "Raccolta lead, email, numeri di telefono",
        "Integrazione con CRM, calendari, moduli personalizzati",
        "Generazione automatica di report e flussi conversazionali avanzati",
        "Dalle versioni base fino ai chatbot GPT-powered con flussi ramificati",
      ],
    },
    {
      icon: <Mail className="text-brown" size={32} />,
      title: t("ai.service2.title"),
      description: t("ai.service2.description"),
      features: [
        "Generazione di email personalizzate in base al settore e target",
        "Sequenze automatiche con follow-up intelligenti",
        "Monitoraggio risposte, apertura e click",
        "Integrazione completa con CRM e strumenti esterni",
        "Dai semplici modelli fino a sistemi completi autonomi",
      ],
    },
    {
      icon: <FileText className="text-brown" size={32} />,
      title: t("ai.service3.title"),
      description: t("ai.service3.description"),
      features: [
        "Collegamento a piattaforme come Google Ads, Meta, Instagram",
        "Report mensili PDF o dashboard live",
        "Eliminazione totale del lavoro manuale",
        "Perfetto per agenzie, e-commerce, team marketing",
      ],
    },
    {
      icon: <Calendar className="text-brown" size={32} />,
      title: t("ai.service4.title"),
      description: t("ai.service4.description"),
      features: [
        "Integrazione con Google Calendar, Calendly, CRM",
        "Promemoria automatici, gestione dei no-show",
        "Email scritte con AI, personalizzate come se fossero manuali",
        "Pensato per chi non può permettersi di perdere opportunità",
      ],
    },
    {
      icon: <Users className="text-brown" size={32} />,
      title: t("ai.service5.title"),
      description: t("ai.service5.description"),
      features: [
        "Tag automatici su CRM",
        "Invio email e messaggi SMS",
        "Funnel e pipeline intelligenti",
        "Follow-up, assegnazioni e scoring senza intervento umano",
        "Ideale per team commerciali e customer service",
      ],
    },
    {
      icon: <Calculator className="text-brown" size={32} />,
      title: t("ai.service6.title"),
      description: t("ai.service6.description"),
      features: [
        "Fogli Google/Notion configurati",
        "Web form che generano PDF brandizzati",
        "Sistemi avanzati con logiche condizionali",
        "Invio automatico e archiviazione",
        "Coerenza, professionalità e velocità garantite",
      ],
    },
  ]

  const stats = [
    { value: "85%", description: t("ai.stat1") },
    { value: "40%", description: t("ai.stat2") },
    { value: "24/7", description: t("ai.stat3") },
    { value: "300%", description: t("ai.stat4") },
  ]

  const whyChooseUs = [
    "Tempi di delivery rapidi: da 2 a 7 giorni",
    "Integrazione con qualsiasi CRM, sito, o tool esterno",
    "Interfaccia semplice per l'utente, logica avanzata nel backend",
    "Soluzioni modulari, scalabili e personalizzabili",
    "Costruiamo solo automazioni che generano risultati",
    "Supporto continuo e ottimizzazione post-implementazione",
    "Team specializzato in AI e automazione aziendale",
  ]

  const benefits = [
    {
      icon: <Clock className="text-brown" size={24} />,
      title: t("ai.benefit1.title"),
      description: t("ai.benefit1.description"),
    },
    {
      icon: <Target className="text-brown" size={24} />,
      title: t("ai.benefit2.title"),
      description: t("ai.benefit2.description"),
    },
    {
      icon: <TrendingUp className="text-brown" size={24} />,
      title: t("ai.benefit3.title"),
      description: t("ai.benefit3.description"),
    },
    {
      icon: <Cpu className="text-brown" size={24} />,
      title: t("ai.benefit4.title"),
      description: t("ai.benefit4.description"),
    },
    {
      icon: <Shield className="text-brown" size={24} />,
      title: t("ai.benefit5.title"),
      description: t("ai.benefit5.description"),
    },
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
              {t("automazioni-ai.hero.subtitle")}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight scroll-animate fade-up delay-200">
            {t("automazioni-ai.hero.title")
              .split(" ")
              .map((word, index) => {
                if (word === "Intelligenti" || word === "Intelligent") {
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
            {t("automazioni-ai.hero.description")}
          </p>

          <div className="max-w-3xl mx-auto scroll-animate fade-up delay-600">
            <div className="section-divider mb-6">
              <span className="bg-white px-4 text-gold text-xs font-medium tracking-widest uppercase">
                {t("automazioni-ai.hero.tagline")}
              </span>
            </div>

            <div className="bg-beige/50 rounded-none p-8 border border-gold/20 hover:shadow-lg transition-all duration-1000 hover:scale-102">
              <p className="text-gray-700 text-base leading-relaxed font-light">
                {t("automazioni-ai.hero.tagline.description")}
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
          <div className="text-center mb-12 scroll-animate fade-up">
            <div className="section-divider mb-6">
              <span className="bg-beige px-4 text-gold text-xs font-medium tracking-widest uppercase">
                {t("automazioni-ai.services.title")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              {t("automazioni-ai.services.subtitle")}
            </h2>
          </div>

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

      {/* Benefits Section */}
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
                {t("automazioni-ai.benefits.title")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              {t("automazioni-ai.benefits.subtitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="luxury-card bg-white p-6 rounded-none text-center scroll-animate scale-up hover:scale-105 transition-all duration-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-all duration-500 group-hover:rotate-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors duration-500">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 bg-beige/30 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gold/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brown/5 rounded-full animate-float-reverse"></div>

        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 scroll-animate fade-up">
            <div className="section-divider mb-6">
              <span className="bg-beige px-4 text-gold text-xs font-medium tracking-widest uppercase">
                {t("automazioni-ai.stats-key.title")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              {t("automazioni-ai.stats-key.subtitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                stat: "37%",
                description: "Solo il 37% delle chiamate in entrata riceve risposta da parte delle aziende",
                source: "Voicespin",
              },
              {
                stat: "21x",
                description: "I lead contattati entro 1 minuto sono fino a 21 volte più propensi a convertirsi",
                source: "Dripify",
              },
              {
                stat: "100x",
                description:
                  "Le aziende che rispondono entro 5 minuti hanno una probabilità di contatto 100 volte superiore rispetto a quelle che rispondono dopo 30 minuti",
                source: "Harvard Business Review",
              },
              {
                stat: "60%",
                description:
                  "Oltre il 60% dei consumatori si aspetta una risposta immediata a domande di vendita, anche fuori orario",
                source: "HubSpot",
              },
              {
                stat: "70%",
                description: "I chatbot AI possono ridurre del 70% i costi di supporto e gestione lead",
                source: "IBM",
              },
              {
                stat: "391%",
                description: "Il tasso medio di conversione dopo un contatto tempestivo può aumentare fino al 391%",
                source: "Lead Response Management Study",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="luxury-card bg-white rounded-none p-6 scroll-animate fade-up hover:scale-102 transition-all duration-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl font-serif font-bold text-gold group-hover:text-brown transition-colors duration-500 animate-counter min-w-fit">
                    {item.stat}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light leading-relaxed text-sm mb-2 group-hover:text-gray-900 transition-colors duration-500">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-500 font-light italic">Fonte: {item.source}</p>
                  </div>
                </div>
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
                {t("automazioni-ai.stats.title")}
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
                {t("automazioni-ai.why.title")}
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
              {t("automazioni-ai.cta.subtitle")}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 scroll-animate fade-up delay-200">
            {t("automazioni-ai.cta.title")}
          </h2>

          <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed scroll-animate fade-up delay-400">
            {t("automazioni-ai.cta.description")}
          </p>

          <div className="scroll-animate scale-up delay-600">
            <a
              href="https://auctusapex.it/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gold/30 hover:bg-gold/5 hover:scale-102 transition-all duration-700 cursor-pointer"
            >
              <span className="text-gold font-medium">{t("automazioni-ai.cta.button")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
