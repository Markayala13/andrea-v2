"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Instagram, Facebook, Link2 } from "lucide-react"
import { CancellationPolicyModal } from "@/components/cancellation-policy-modal"
import { useLanguage } from "@/lib/language-context"

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 px-2.5 py-1 font-sans text-xs tracking-wider transition-all duration-300 ${
          language === "en"
            ? "text-foreground border-b border-accent"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        <span className="text-base leading-none">🇺🇸</span>
        <span>EN</span>
      </button>
      <span className="text-border text-xs">|</span>
      <button
        onClick={() => setLanguage("es")}
        className={`flex items-center gap-1.5 px-2.5 py-1 font-sans text-xs tracking-wider transition-all duration-300 ${
          language === "es"
            ? "text-foreground border-b border-accent"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Español"
      >
        <span className="text-base leading-none">🇪🇸</span>
        <span>ES</span>
      </button>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [policyOpen, setPolicyOpen] = useState(false)
  const { scrollY } = useScroll()
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.treatments, href: "#treatments" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#book" },
  ]

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 248, 245, 0)", "rgba(250, 248, 245, 0.95)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          hasScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Angelica Aesthetics"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm tracking-wider text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/angelicaaestheticsnyc?igsh=dmwwM2J1MDhnOTlv&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1DWTBtYagz/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linktr.ee/Angelica_Aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                  aria-label="Linktree"
                >
                  <Link2 className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Language Switcher Desktop */}
              <LanguageSwitcher />

              <div className="flex flex-col items-center gap-1">
                <a
                  href="#book"
                  className="bg-primary text-primary-foreground px-6 py-2 font-sans text-sm tracking-wider hover:bg-foreground/90 transition-colors duration-300"
                >
                  {t.nav.bookNow}
                </a>
                <button
                  onClick={() => setPolicyOpen(true)}
                  className="font-sans text-[10px] tracking-wider text-muted-foreground hover:text-accent transition-colors duration-300 underline underline-offset-2"
                >
                  {t.nav.cancellationPolicy}
                </button>
              </div>
            </div>

            {/* Mobile: Language switcher + Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-background">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.1 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://www.instagram.com/angelicaaestheticsnyc?igsh=dmwwM2J1MDhnOTlv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1DWTBtYagz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linktr.ee/Angelica_Aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Linktree"
              >
                <Link2 className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.a
              href="#book"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: (navLinks.length + 2) * 0.1 }}
              className="mt-4 bg-primary text-primary-foreground px-10 py-4 font-sans text-sm tracking-[0.2em] uppercase"
            >
              {t.nav.bookNow}
            </motion.a>
            <motion.button
              onClick={() => { setIsOpen(false); setPolicyOpen(true) }}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: (navLinks.length + 3) * 0.1 }}
              className="font-sans text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors underline underline-offset-2"
            >
              {t.nav.cancellationPolicy}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <CancellationPolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </>
  )
}
