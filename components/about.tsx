"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/specialist.jpeg"
                alt="Angelica - Laser Hair Removal Specialist"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-accent/20 w-48 h-48 -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 tracking-wide">
              {t.about.title}
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              {t.about.p2}
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              {t.about.p3}
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="font-serif text-4xl text-accent mb-1">6+</p>
                <p className="font-sans text-sm text-muted-foreground tracking-wide">{t.about.yearsExperience}</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent mb-1">500+</p>
                <p className="font-sans text-sm text-muted-foreground tracking-wide">{t.about.happyClients}</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent mb-1">All</p>
                <p className="font-sans text-sm text-muted-foreground tracking-wide">{t.about.skinTypes}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
