"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js"
    script.type = "text/javascript"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-wide">
            {t.faq.title}
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-secondary/50 transition-colors duration-300"
              >
                <h3 className="font-serif text-lg md:text-xl text-foreground pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 bg-card">
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/4XABxzSeD5sEDvX7FLp4"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
