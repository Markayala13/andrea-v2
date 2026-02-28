"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface CancellationPolicyModalProps {
  open: boolean
  onClose: () => void
}

export function CancellationPolicyModal({ open, onClose }: CancellationPolicyModalProps) {
  const { t } = useLanguage()
  const p = t.policy

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-background border border-border z-50 max-h-[85vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-wide">{p.title}</h2>
                <button
                  onClick={onClose}
                  className="ml-4 flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="w-16 h-px bg-accent mb-6" />
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                {p.intro}
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">{p.section1Title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                {p.section1p1.before}<span className="text-foreground font-medium">{p.section1p1.bold}</span>{p.section1p1.after}
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                {p.section1p2.before}<span className="text-foreground font-medium">{p.section1p2.bold}</span>{p.section1p2.after}
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                {p.section1p3.before}<span className="text-foreground font-medium">{p.section1p3.bold}</span>{p.section1p3.after}
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">{p.section2Title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                {p.section2p.before}<span className="text-foreground font-medium">{p.section2p.bold}</span>{p.section2p.after}
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">{p.section3Title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                {p.section3p}
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">{p.section4Title}</h3>
              <p className="font-sans text-sm text-muted-foreground mb-2">{p.section4intro}</p>
              <ul className="font-sans text-sm text-muted-foreground space-y-1 mb-6 list-none">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />{p.section4item1}</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />{p.section4item2} <a href="tel:+13475244770" className="text-accent hover:underline">347 524 4770</a></li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />{p.section4item3} <a href="mailto:info@angelicaaestheticsnyc.com" className="text-accent hover:underline">info@angelicaaestheticsnyc.com</a></li>
              </ul>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
                {p.closing}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
