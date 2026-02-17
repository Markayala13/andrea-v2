"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Instagram, Facebook, Link2 } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#book" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollY } = useScroll()
  
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
                  key={link.label}
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
              <a
                href="#book"
                className="bg-primary text-primary-foreground px-6 py-2 font-sans text-sm tracking-wider hover:bg-foreground/90 transition-colors duration-300"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
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
                key={link.label}
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
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
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
              transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.1 }}
              className="mt-4 bg-primary text-primary-foreground px-10 py-4 font-sans text-sm tracking-[0.2em] uppercase"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  )
}
