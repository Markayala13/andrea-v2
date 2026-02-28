"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Plus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const FACIAL_PRICES = ["$89", "$150", "$150", "$175", "$225", "Consult"]
const FACIAL_DURATIONS = ["30 min", "60 min", "50 min", "60 min", "70 min", "90 min"]
const FACIAL_FEATURED = [false, false, true, false, true, false]

const LASER_SMALL_PRICES = ["$33", "$45", "$45", "$45"]
const LASER_MEDIUM_PRICES = ["$75", "$99", "$99", "$125", "$99", "$75"]
const LASER_LARGE_PRICES = ["$150", "$97", "$175", "$175", "$175", "$225"]
const ADDON_PRICES = ["$25", "$25", "$25"]

export function Packages() {
  const { t } = useLanguage()

  const facialTreatments = t.treatments.facials.map((f, i) => ({
    ...f,
    price: FACIAL_PRICES[i],
    duration: FACIAL_DURATIONS[i],
    featured: FACIAL_FEATURED[i],
  }))

  const laserSmallAreas = t.treatments.laserSmallAreas.map((item, i) => ({
    ...item,
    price: LASER_SMALL_PRICES[i],
  }))

  const laserMediumAreas = t.treatments.laserMediumAreas.map((item, i) => ({
    ...item,
    price: LASER_MEDIUM_PRICES[i],
  }))

  const laserLargeAreas = t.treatments.laserLargeAreas.map((item, i) => ({
    ...item,
    price: LASER_LARGE_PRICES[i],
  }))

  const addOns = t.treatments.addOns.map((addon, i) => ({
    ...addon,
    price: ADDON_PRICES[i],
  }))

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
            {t.treatments.title}
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.treatments.subtitle}
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
              {t.treatments.facialTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facialTreatments.map((treatment, index) => (
              <motion.div
                key={index}
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
                    {t.treatments.popular}
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
              {t.treatments.laserTitle}
            </h3>
          </div>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            {t.treatments.laserDescription}
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
              <h4 className="font-serif text-xl text-center text-foreground mb-2">{t.treatments.smallAreas}</h4>
              <p className="text-center text-sm text-muted-foreground mb-6">{t.treatments.smallAreasSubtitle}</p>
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
              <h4 className="font-serif text-xl text-center text-foreground mb-2">{t.treatments.mediumAreas}</h4>
              <p className="text-center text-sm text-accent mb-6">{t.treatments.mediumAreasSubtitle}</p>
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
              <h4 className="font-serif text-xl text-center text-foreground mb-2">{t.treatments.largeAreas}</h4>
              <p className="text-center text-sm text-muted-foreground mb-6">{t.treatments.largeAreasSubtitle}</p>
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
              {t.treatments.addOnsTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
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
