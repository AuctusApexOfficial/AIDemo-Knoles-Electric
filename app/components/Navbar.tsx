"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="w-full px-4 lg:px-6">
        <div className="flex justify-between items-center h-18 w-full h-14">
          <a
            href="https://auctusapex.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 flex-row"
          >
            <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center bg-white">
              <span className="text-gold font-serif font-bold text-sm">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-semibold text-gray-900">Auctus Apex</span>
              <span className="text-xs text-gray-500 font-light tracking-wider">{""}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/siti-web"
              className="text-gray-700 hover:text-brown font-medium transition-colors duration-300 text-base"
            >
              {t("nav.siti-web")}
            </Link>
            <Link
              href="/automazioni-ai"
              className="text-gray-700 hover:text-brown font-medium transition-colors duration-300 text-base"
            >
              {t("nav.automazioni-ai")}
            </Link>
            <Link
              href="/marketing-digitale"
              className="text-gray-700 hover:text-brown font-medium transition-colors duration-300 text-base"
            >
              {t("nav.marketing-digitale")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brown">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white">
              <Link
                href="/siti-web"
                className="block px-3 py-2 text-gray-700 hover:text-brown font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.siti-web")}
              </Link>
              <Link
                href="/automazioni-ai"
                className="block px-3 py-2 text-gray-700 hover:text-brown font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.automazioni-ai")}
              </Link>
              <Link
                href="/marketing-digitale"
                className="block px-3 py-2 text-gray-700 hover:text-brown font-medium text-base"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.marketing-digitale")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
