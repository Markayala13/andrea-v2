"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Plus } from "lucide-react"

// Facial Treatments
const facialTreatments = [
  {
    name: "Express Facial",
    price: "$89",
    duration: "30 min",
    description: "Get glowing in just 30 minutes. Deeply cleanses, exfoliates, and hydrates for an instant, radiant boost. Perfect for busy clients.",
    featured: false,
  },
  {
    name: "Deep Cleansing Facial",
    price: "$150",
    duration: "60 min",
    description: "A deep reset for your skin. Removes buildup, unclogs pores, exfoliates dull skin using microdermabrasion, steam, extractions, and a nourishing mask.",
    featured: false,
  },
  {
    name: "Glow Genesis",
    price: "$150",
    duration: "50 min",
    description: "Laser Genesis for a glassy-skin glow. Boosts collagen, fades acne scars, calms redness, shrinks pores without peeling or downtime.",
    featured: true,
  },
  {
    name: "The Lifted Glow Facial",
    price: "$175",
    duration: "60 min",
    description: "A rejuvenating treatment using Radio Frequency to firm, lift, and boost elasticity while nourishing serums leave skin silky and radiant.",
    featured: false,
  },
  {
    name: "Luminous Lift Facial",
    price: "$225",
    duration: "70 min",
    description: "A sculpting, tension-relieving facial using Gua Sha to lift, define, and reveal your natural glow. Promotes lymphatic drainage and boosts circulation.",
    featured: true,
  },
  {
    name: "Microneedling Treatment",
    price: "Consult",
    duration: "90 min",
    description: "Stimulates collagen and elastin using ultra-fine needles to smooth texture, fade acne scars, minimize pores, and soften fine lines. Best in a series of 3-6 sessions.",
    featured: false,
  },
]

// Laser Hair Removal
const laserSmallAreas = [
  { area: "Upper Lip", price: "$33" },
  { area: "Chin", price: "$45" },
  { area: "Sideburns", price: "$45" },
  { area: "Ears", price: "$45" },
]

const laserMediumAreas = [
  { area: "Underarms", price: "$75" },
  { area: "Bikini Line", price: "$99" },
  { area: "Half Arms", price: "$99" },
  { area: "Half Legs", price: "$125" },
  { area: "Inner Thighs", price: "$99" },
  { area: "Lower Back", price: "$75" },
]

const laserLargeAreas = [
  { area: "Brazilian", price: "$150" },
  { area: "Chest", price: "$97" },
  { area: "Full Back", price: "$175" },
  { area: "Full Arms", price: "$175" },
  { area: "Abdomen + Chest", price: "$175" },
  { area: "Full Legs", price: "$225" },
]

// Add-ons
const addOns = [
  { name: "Gua Sha Sculpt & Lift", price: "$25", description: "Lift, contour, and promote lymphatic drainage with a soothing facial massage." },
  { name: "LED Light Therapy", price: "$25", description: "Target fine lines, acne, or redness with gentle, skin-reviving LED light." },
  { name: "Oxygen Glow Infusion", price: "$25", description: "Boosts hydration, stimulates collagen, and leaves skin radiant and plump." },
]

export function Packages() {
  return (
    <section id="treatments" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-wide">
            Our Treatments
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
            Premium aesthetic treatments designed to enhance your natural beauty with lasting results.
          </p>
        </motion.div>

        {/* Facial Treatments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground tracking-wide">
              Facial Treatments
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facialTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative bg-card border p-8 transition-all duration-300 ${
                  treatment.featured
                    ? "border-accent/50 shadow-lg shadow-accent/10"
                    : "border-border hover:border-accent/30"
                }`}
              >
                {treatment.featured && (
                  <div className="absolute -top-3 left-6 bg-accent text-primary-foreground text-xs px-3 py-1 tracking-wider">
                    POPULAR
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">{treatment.name}</h4>
                    <p className="font-sans text-sm text-accent">{treatment.duration}</p>
                  </div>
                  <p className="font-serif text-2xl text-foreground">{treatment.price}</p>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {treatment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Laser Hair Removal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground tracking-wide">
              Laser Hair Removal
            </h3>
          </div>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            Uses focused light to disable the hair follicle safely and effectively. Cooling is used for comfort, pulses are quick, and there's no downtime.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Small Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border p-8"
            >
              <h4 className="font-serif text-xl text-center text-foreground mb-2">Small Areas</h4>
              <p className="text-center text-sm text-muted-foreground mb-6">Quick & precise</p>
              <div className="space-y-4">
                {laserSmallAreas.map((item) => (
                  <div key={item.area} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="font-sans text-foreground">{item.area}</span>
                    <span className="font-serif text-lg text-accent">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Medium Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-accent/30 p-8 shadow-lg shadow-accent/5"
            >
              <h4 className="font-serif text-xl text-center text-foreground mb-2">Medium Areas</h4>
              <p className="text-center text-sm text-accent mb-6">Most popular</p>
              <div className="space-y-4">
                {laserMediumAreas.map((item) => (
                  <div key={item.area} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="font-sans text-foreground">{item.area}</span>
                    <span className="font-serif text-lg text-accent">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Large Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border p-8"
            >
              <h4 className="font-serif text-xl text-center text-foreground mb-2">Large Areas</h4>
              <p className="text-center text-sm text-muted-foreground mb-6">Full coverage</p>
              <div className="space-y-4">
                {laserLargeAreas.map((item) => (
                  <div key={item.area} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="font-sans text-foreground">{item.area}</span>
                    <span className="font-serif text-lg text-accent">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Plus className="w-5 h-5 text-accent" />
            <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground tracking-wide">
              Glow Boost Add-Ons
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="bg-secondary border border-border p-6 text-center"
              >
                <p className="font-serif text-2xl text-accent mb-2">{addon.price}</p>
                <h4 className="font-serif text-lg text-foreground mb-3">{addon.name}</h4>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
