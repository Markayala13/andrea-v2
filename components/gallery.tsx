"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/images/treatment-7.jpeg",
    alt: "Underarm laser treatment"
  },
  {
    src: "/images/treatment-4.jpeg",
    alt: "Leg laser treatment"
  },
  {
    src: "/images/treatment-3.jpeg",
    alt: "Underarm treatment close-up"
  },
  {
    src: "/images/treatment-5.jpeg",
    alt: "Laser treatment in progress"
  },
  {
    src: "/images/treatment-6.jpeg",
    alt: "Close-up of laser treatment"
  },
  {
    src: "/images/treatment-2.jpeg",
    alt: "Treatment preparation"
  },
  {
    src: "/images/treatment-1.png",
    alt: "Laser treatment session"
  },
  {
    src: "/images/image0 (1).png",
    alt: "Aesthetics treatment result"
  },
  {
    src: "/images/image1 (1).png",
    alt: "Before and after treatment"
  },
  {
    src: "/images/image2 (1).png",
    alt: "Skin treatment close-up"
  },
  {
    src: "/images/image3.png",
    alt: "Professional laser session"
  },
  {
    src: "/images/image4.jpeg",
    alt: "Treatment results"
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-wide">
            Treatment Gallery
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our professional laser hair removal treatments using advanced technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
