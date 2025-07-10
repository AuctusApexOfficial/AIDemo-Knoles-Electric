"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "it" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  it: {
    // Homepage
    "hero.subtitle": "Auctus Apex Italia",
    "hero.title": "Innovazione Digitale per il Futuro del Tuo Business",
    "hero.description": "AI, Web e Marketing su Misura per aziende italiane di eccellenza",
    "hero.about.title": "Chi Siamo",
    "hero.about.description":
      "Auctus Apex è una società di innovazione digitale con sede a New York, operativa anche in Italia per servire aziende di eccellenza. Specializziamo in soluzioni AI avanzate, sviluppo web di lusso e strategie di marketing digitale su misura per trasformare il futuro del tuo business.",

    // Navigation
    "nav.siti-web": "Siti Web",
    "nav.automazioni-ai": "Automazioni AI",
    "nav.marketing-digitale": "Marketing Digitale",

    // Siti Web Page
    "siti-web.hero.subtitle": "Sviluppo Web su Misura",
    "siti-web.hero.title": "Eleganza, Velocità e Automazione al Servizio della Tua Crescita",
    "siti-web.hero.description":
      "In Auctus Apex non costruiamo semplici siti web: costruiamo infrastrutture digitali intelligenti. Ogni progetto è su misura per aumentare l'autorità del tuo brand, ottimizzare l'esperienza utente e generare risultati concreti.",
    "siti-web.hero.solutions": "Le Nostre Soluzioni Web",
    "siti-web.hero.solutions.description":
      "Ogni sito è sviluppato completamente da zero, senza template, ed è progettato per essere mobile-first, SEO-ready e scalabile.",
    "siti-web.optimization.title": "Ottimizzazione, SEO & Aggiornamenti",
    "siti-web.optimization.subtitle": "Un Sito Bello Non Basta: Serve Velocità, Sicurezza e Visibilità",
    "siti-web.stats.title": "Alcuni Dati Che Parlano Chiaro",
    "siti-web.why.title": "Perché Scegliere Auctus Apex",
    "siti-web.cta.subtitle": "Hai un Progetto in Mente?",
    "siti-web.cta.title": "Contattaci per una Demo Personalizzata",
    "siti-web.cta.description": "Costruiamo il tuo sito. Progettiamo la tua crescita.",
    "siti-web.cta.button": "Inizia il Tuo Progetto",

    // Siti Web Services
    "siti-web.service1.title": "Siti Istituzionali Professionali",
    "siti-web.service1.description": "Perfetti per aziende che vogliono una presenza online autorevole.",
    "siti-web.service2.title": "Siti E-commerce e Booking",
    "siti-web.service2.description":
      "Ideali per brand, boutique o attività di servizi che vogliono vendere online o ricevere prenotazioni.",
    "siti-web.service3.title": "Siti Premium e Cinematici",
    "siti-web.service3.description": "Progetti di alto livello per chi vuole stupire visivamente.",
    "siti-web.service4.title": "Sistemi Personalizzati con Admin Panel",
    "siti-web.service4.description": "Per aziende che necessitano di aree riservate, gestionali o portali interattivi.",

    // Siti Web Stats
    "siti-web.stat1": "delle prime impressioni online dipendono dal design del sito (Stanford)",
    "siti-web.stat2": "degli utenti valuta la credibilità aziendale in base al sito (Adobe)",
    "siti-web.stat3": "in più di contatti può generare un sito ottimizzato",
    "siti-web.stat4": "tempi di caricamento aumentano il tasso di conversione del 32% (Google)",

    // Automazioni AI Page
    "automazioni-ai.hero.subtitle": "AI Automation by Auctus Apex",
    "automazioni-ai.hero.title": "Automazioni Intelligenti per Aziende Visionarie",
    "automazioni-ai.hero.description":
      "In un mondo in cui il tempo è la risorsa più preziosa, automatizzare non è un'opzione: è una necessità. Con Auctus Apex trasformi i processi ripetitivi in flussi di lavoro intelligenti, ottimizzando tempo, risorse e risultati.",
    "automazioni-ai.hero.tagline": "Meno Lavoro Manuale. Più Efficienza. Più Crescita.",
    "automazioni-ai.hero.tagline.description":
      "L'automazione non è il futuro. È adesso. Trasforma la tua azienda con soluzioni AI su misura che lavorano 24/7 per te.",
    "automazioni-ai.services.title": "Le Nostre Soluzioni AI",
    "automazioni-ai.services.subtitle": "Automazioni che Generano Risultati",
    "automazioni-ai.benefits.title": "Vantaggi dell'Automazione AI",
    "automazioni-ai.benefits.subtitle": "Trasforma il Tuo Business: Efficienza, Precisione, Crescita",
    "automazioni-ai.stats-key.title": "Statistiche Chiave sull'Automazione AI",
    "automazioni-ai.stats-key.subtitle": "I Numeri Parlano Chiaro: Velocità e Tempestività Fanno la Differenza",
    "automazioni-ai.stats.title": "L'Impatto dell'Automazione AI",
    "automazioni-ai.why.title": "Perché Scegliere Auctus Apex",
    "automazioni-ai.cta.subtitle": "Hai un Flusso che Ti Ruba Tempo?",
    "automazioni-ai.cta.title": "Raccontacelo. Noi lo Automatizzeremo.",
    "automazioni-ai.cta.description":
      "Trasforma i tuoi processi ripetitivi in automazioni intelligenti. Il futuro è adesso.",
    "automazioni-ai.cta.button": "Inizia la Tua Automazione",

    // AI Services
    "ai.service1.title": "AI Chatbot Personalizzati",
    "ai.service1.description":
      "Non sono i soliti chatbot da FAQ. I nostri sistemi comprendono le esigenze degli utenti, rispondono in modo intelligente e guidano l'interazione verso azioni concrete.",
    "ai.service2.title": "Automazione Email Commerciali e Outreach",
    "ai.service2.description": "Motori automatizzati per scrivere, inviare e seguire campagne email ad alto impatto.",
    "ai.service3.title": "Generatori di Report Automatici",
    "ai.service3.description": "Dati trasformati in report chiari, personalizzati e inviati in automatico.",
    "ai.service4.title": "Scheduler e Follow-Up con AI",
    "ai.service4.description": "Sistema di prenotazione appuntamenti con follow-up automatici personalizzati.",
    "ai.service5.title": "CRM + Automazione Lead",
    "ai.service5.description": "Ogni richiesta viene gestita e instradata in automatico. Nessun passaggio a mano.",
    "ai.service6.title": "Generazione Preventivi e Offerte",
    "ai.service6.description": "Tool intelligenti per creare preventivi e proposte in pochi secondi, senza errori.",

    // AI Benefits
    "ai.benefit1.title": "Risparmio Tempo",
    "ai.benefit1.description": "Elimina task ripetitivi e concentrati su attività strategiche",
    "ai.benefit2.title": "Precisione Assoluta",
    "ai.benefit2.description": "Zero errori umani, risultati consistenti e affidabili",
    "ai.benefit3.title": "Scalabilità Immediata",
    "ai.benefit3.description": "Gestisci volumi crescenti senza aumentare il team",
    "ai.benefit4.title": "Intelligenza Adattiva",
    "ai.benefit4.description": "Sistemi che imparano e migliorano nel tempo",
    "ai.benefit5.title": "Sicurezza Garantita",
    "ai.benefit5.description": "Protezione dati e conformità normative integrate",

    // AI Stats
    "ai.stat1": "di riduzione del tempo dedicato a task ripetitivi (McKinsey)",
    "ai.stat2": "aumento della produttività con automazione AI (Accenture)",
    "ai.stat3": "operatività continua senza intervento umano",
    "ai.stat4": "ROI medio delle automazioni AI implementate",

    // Marketing Digitale Page
    "marketing-digitale.hero.subtitle": "Marketing Digitale Strategico",
    "marketing-digitale.hero.title": "Visibilità. Autorità. Crescita.",
    "marketing-digitale.hero.description":
      "In Auctus Apex il marketing digitale non è solo una questione di presenza online: è una scienza guidata dai dati, progettata per portare risultati misurabili. Ogni strategia che sviluppiamo è personalizzata, elegante e orientata alla conversione — mai standard, mai generica.",

    "marketing-digitale.service1.title": "Campagne Google Ads su Misura",
    "marketing-digitale.service1.description":
      "Portiamo il tuo brand in cima alla ricerca quando i tuoi clienti ti stanno cercando.",
    "marketing-digitale.service2.title": "Newsletter e Automazioni Email",
    "marketing-digitale.service2.description":
      "Un canale diretto, elegante e performante per comunicare con clienti, contatti e lead. Nessuna distrazione, solo contenuti rilevanti.",
    "marketing-digitale.service3.title": "Strategia e Identità di Brand",
    "marketing-digitale.service3.description":
      "Il tuo brand non è solo un logo. È ciò che la gente pensa quando non sei nella stanza. Noi ti aiutiamo a guidare quella percezione.",

    "marketing-digitale.advantage.title": "Il Vantaggio Auctus Apex",
    "marketing-digitale.cta.subtitle": "Il tuo marketing merita una mente strategica, non una checklist.",
    "marketing-digitale.cta.title": "Noi non seguiamo il traffico. Lo guidiamo.",
    "marketing-digitale.cta.button": "Richiedi ora una consulenza dedicata",

    // Common
    "common.back": "Home",
  },
  en: {
    // Homepage
    "hero.subtitle": "Auctus Apex USA",
    "hero.title": "Digital Innovation for Your Business Future",
    "hero.description": "Bespoke AI, Web & Marketing Solutions for Italian Companies of Excellence",
    "hero.about.title": "About Us",
    "hero.about.description":
      "Auctus Apex is a digital innovation company based in New York, also operating in Italy to serve companies of excellence. We specialize in advanced AI solutions, luxury web development, and bespoke digital marketing strategies to transform your business future.",

    // Navigation
    "nav.siti-web": "Web Development",
    "nav.automazioni-ai": "AI Automation",
    "nav.marketing-digitale": "Digital Marketing",

    // Siti Web Page
    "siti-web.hero.subtitle": "Bespoke Web Development",
    "siti-web.hero.title": "Elegance, Speed & Automation at the Service of Your Growth",
    "siti-web.hero.description":
      "At Auctus Apex, we don't build simple websites: we craft intelligent digital infrastructures. Every project is tailored to enhance your brand authority, optimize user experience, and generate concrete results.",
    "siti-web.hero.solutions": "Our Web Solutions",
    "siti-web.hero.solutions.description":
      "Every website is developed completely from scratch, without templates, and designed to be mobile-first, SEO-ready, and scalable.",
    "siti-web.optimization.title": "Optimization, SEO & Updates",
    "siti-web.optimization.subtitle": "A Beautiful Website Isn't Enough: You Need Speed, Security & Visibility",
    "siti-web.stats.title": "The Numbers Speak for Themselves",
    "siti-web.why.title": "Why Choose Auctus Apex",
    "siti-web.cta.subtitle": "Have a Project in Mind?",
    "siti-web.cta.title": "Contact Us for a Personalized Demo",
    "siti-web.cta.description": "We build your website. We design your growth.",
    "siti-web.cta.button": "Start Your Project",

    // Siti Web Services
    "siti-web.service1.title": "Professional Corporate Websites",
    "siti-web.service1.description": "Perfect for companies seeking an authoritative online presence.",
    "siti-web.service2.title": "E-commerce & Booking Sites",
    "siti-web.service2.description":
      "Ideal for brands, boutiques, or service businesses wanting to sell online or receive bookings.",
    "siti-web.service3.title": "Premium & Cinematic Websites",
    "siti-web.service3.description": "High-level projects for those who want to visually astound.",
    "siti-web.service4.title": "Custom Systems with Admin Panel",
    "siti-web.service4.description": "For companies needing private areas, management systems, or interactive portals.",

    // Siti Web Stats
    "siti-web.stat1": "of online first impressions depend on website design (Stanford)",
    "siti-web.stat2": "of users judge company credibility based on the website (Adobe)",
    "siti-web.stat3": "more contacts can be generated by an optimized website",
    "siti-web.stat4": "loading times increase conversion rate by 32% (Google)",

    // Automazioni AI Page
    "automazioni-ai.hero.subtitle": "AI Automation by Auctus Apex",
    "automazioni-ai.hero.title": "Intelligent Automation for Visionary Companies",
    "automazioni-ai.hero.description":
      "In a world where time is the most precious resource, automation isn't an option: it's a necessity. With Auctus Apex, transform repetitive processes into intelligent workflows, optimizing time, resources, and results.",
    "automazioni-ai.hero.tagline": "Less Manual Work. More Efficiency. More Growth.",
    "automazioni-ai.hero.tagline.description":
      "Automation isn't the future. It's now. Transform your company with bespoke AI solutions that work 24/7 for you.",
    "automazioni-ai.services.title": "Our AI Solutions",
    "automazioni-ai.services.subtitle": "Automation that Generates Results",
    "automazioni-ai.benefits.title": "Benefits of AI Automation",
    "automazioni-ai.benefits.subtitle": "Transform Your Business: Efficiency, Precision, Growth",
    "automazioni-ai.stats-key.title": "Key AI Automation Statistics",
    "automazioni-ai.stats-key.subtitle": "The Numbers Are Clear: Speed and Timeliness Make the Difference",
    "automazioni-ai.stats.title": "The Impact of AI Automation",
    "automazioni-ai.why.title": "Why Choose Auctus Apex",
    "automazioni-ai.cta.subtitle": "Have a Process That's Stealing Your Time?",
    "automazioni-ai.cta.title": "Tell Us About It. We'll Automate It.",
    "automazioni-ai.cta.description":
      "Transform your repetitive processes into intelligent automation. The future is now.",
    "automazioni-ai.cta.button": "Start Your Automation",

    // AI Services
    "ai.service1.title": "Personalized AI Chatbots",
    "ai.service1.description":
      "These aren't your typical FAQ chatbots. Our systems understand user needs, respond intelligently, and guide interactions toward concrete actions.",
    "ai.service2.title": "Commercial Email & Outreach Automation",
    "ai.service2.description": "Automated engines to write, send, and follow high-impact email campaigns.",
    "ai.service3.title": "Automated Report Generators",
    "ai.service3.description": "Data transformed into clear, personalized reports sent automatically.",
    "ai.service4.title": "AI Scheduling & Follow-Up",
    "ai.service4.description": "Appointment booking system with personalized automated follow-ups.",
    "ai.service5.title": "CRM + Lead Automation",
    "ai.service5.description": "Every request is handled and routed automatically. No manual handoffs.",
    "ai.service6.title": "Quote & Proposal Generation",
    "ai.service6.description": "Intelligent tools to create quotes and proposals in seconds, error-free.",

    // AI Benefits
    "ai.benefit1.title": "Time Savings",
    "ai.benefit1.description": "Eliminate repetitive tasks and focus on strategic activities",
    "ai.benefit2.title": "Absolute Precision",
    "ai.benefit2.description": "Zero human errors, consistent and reliable results",
    "ai.benefit3.title": "Immediate Scalability",
    "ai.benefit3.description": "Handle growing volumes without increasing team size",
    "ai.benefit4.title": "Adaptive Intelligence",
    "ai.benefit4.description": "Systems that learn and improve over time",
    "ai.benefit5.title": "Guaranteed Security",
    "ai.benefit5.description": "Integrated data protection and regulatory compliance",

    // AI Stats
    "ai.stat1": "reduction in time spent on repetitive tasks (McKinsey)",
    "ai.stat2": "productivity increase with AI automation (Accenture)",
    "ai.stat3": "continuous operation without human intervention",
    "ai.stat4": "average ROI of implemented AI automations",

    // Marketing Digitale Page
    "marketing-digitale.hero.subtitle": "Strategic Digital Marketing",
    "marketing-digitale.hero.title": "Visibility. Authority. Growth.",
    "marketing-digitale.hero.description":
      "At Auctus Apex, digital marketing isn't just about online presence: it's a data-driven science designed to deliver measurable results. Every strategy we develop is personalized, elegant, and conversion-focused — never standard, never generic.",

    "marketing-digitale.service1.title": "Bespoke Google Ads Campaigns",
    "marketing-digitale.service1.description":
      "We bring your brand to the top of search when your customers are looking for you.",
    "marketing-digitale.service2.title": "Newsletter & Email Automation",
    "marketing-digitale.service2.description":
      "A direct, elegant, and high-performing channel to communicate with customers, contacts, and leads. No distractions, only relevant content.",
    "marketing-digitale.service3.title": "Brand Strategy & Identity",
    "marketing-digitale.service3.description":
      "Your brand isn't just a logo. It's what people think when you're not in the room. We help you guide that perception.",

    "marketing-digitale.advantage.title": "The Auctus Apex Advantage",
    "marketing-digitale.cta.subtitle": "Your marketing deserves a strategic mind, not a checklist.",
    "marketing-digitale.cta.title": "We don't follow traffic. We lead it.",
    "marketing-digitale.cta.button": "Request a dedicated consultation now",

    // Common
    "common.back": "Home",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("it")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "it" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
    setIsInitialized(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    // Force re-render of all components that use translations
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"))
    }, 0)
  }

  const t = (key: string): string => {
    if (!isInitialized) return key
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
