"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
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
              About Us
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              At Angelica Aesthetics, we specialize in advanced laser hair removal and skin-enhancing treatments designed for people who value results, confidence, and their time.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Located in Manhattan, New York, our private studio offers an elevated experience using advanced laser technology and professional skin treatments suitable for multiple skin types.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Every service is customized to your unique skin needs, goals, and lifestyle to ensure safe, effective, and lasting results. Our goal is to deliver safe, effective results while helping you achieve smooth, confident, and glowing skin.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="font-serif text-4xl text-accent mb-1">6+</p>
                <p className="font-sans text-sm text-muted-foreground tracking-wide">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent mb-1">500+</p>
                <p className="font-sans text-sm text-muted-foreground tracking-wide">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent mb-1">All</p>
                <p className="font-sans text-sm text-muted-foreground tracking-wide">Skin Types</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
