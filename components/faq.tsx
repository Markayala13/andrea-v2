"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How Many Treatments Will I Need?",
    answer: "Most clients see optimal results with 6-8 treatments spaced 4-6 weeks apart. The exact number depends on your hair type, skin tone, and the area being treated. During your consultation, we'll create a personalized treatment plan tailored to your needs."
  },
  {
    question: "How Quickly Will I See Results?",
    answer: "Many clients notice a reduction in hair growth after their first session. However, because hair grows in cycles, multiple treatments are necessary to target all follicles. You'll see progressive improvement with each session, with optimal results typically visible after 4-6 treatments."
  },
  {
    question: "Is Laser Hair Removal Safe for All Skin Types?",
    answer: "Yes! Our advanced laser technology is safe and effective for multiple skin types, including darker skin tones. We customize settings for each client to ensure the safest, most effective treatment possible."
  },
  {
    question: "Does Laser Hair Removal Hurt?",
    answer: "Most clients describe the sensation as a light snap or warm pinch. Our advanced technology includes built-in cooling to maximize comfort. The treatment is generally well-tolerated, and any discomfort is brief and minimal."
  },
  {
    question: "How Should I Prepare for My Treatment?",
    answer: "Avoid sun exposure, tanning, and self-tanners for 2 weeks before your appointment. Shave the treatment area 24 hours before your session. Avoid waxing, plucking, or threading for 4-6 weeks prior, as the laser needs to target the hair follicle."
  },
  {
    question: "Can This Be Combined With Other Treatments?",
    answer: "Yes, laser hair removal can be combined with many other aesthetic treatments. During your consultation, we'll discuss your goals and create a comprehensive treatment plan that may include complementary services for optimal results."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
