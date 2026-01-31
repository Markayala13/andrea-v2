"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Facebook, Link2, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.png"
              alt="Angelica Aesthetics"
              width={80}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Advanced laser hair removal and skin-enhancing treatments in Manhattan, New York.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:+13475244770" 
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                (347) 524-4770
              </a>
              <a 
                href="mailto:angelicaaestheticsny@gmail.com" 
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                angelicaaestheticsny@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/angelica_aesthetics_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/AngelicaAestheticsNY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linktr.ee/angelicaaesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                aria-label="Linktree"
              >
                <Link2 className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-muted-foreground">
              © {new Date().getFullYear()} Angelica Aesthetics. All rights reserved.
            </p>
            <p className="font-sans text-xs text-muted-foreground">
              37 West 26th Street, 7th Floor, New York, NY 10010
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
