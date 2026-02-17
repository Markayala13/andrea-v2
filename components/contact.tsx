"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Link2 } from "lucide-react"

export function Contact() {
  return (
    <section id="book" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">
            Ready to Book Your First Appointment?
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mb-6" />
          <p className="font-sans text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            We are here to help you start your journey towards smooth, confident skin. Click the button to book your appointment or free consultation with us.
          </p>
          <motion.a
            href="tel:+13475244770"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-accent text-foreground px-12 py-4 font-sans text-sm tracking-[0.2em] uppercase hover:bg-accent/90 transition-colors duration-300"
          >
            Book Now
          </motion.a>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-16"
        >
          <a
            href="https://www.instagram.com/angelicaaestheticsnyc?igsh=dmwwM2J1MDhnOTlv&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-accent" />
            <span className="font-sans text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/share/1DWTBtYagz/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            <Facebook className="w-5 h-5 text-accent" />
            <span className="font-sans text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">Facebook</span>
          </a>
          <a
            href="https://linktr.ee/Angelica_Aesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            <Link2 className="w-5 h-5 text-accent" />
            <span className="font-sans text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">Linktree</span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 border border-accent/50 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-serif text-lg mb-2">Address</h3>
            <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed">
              37 West 26th Street<br />
              7th Floor<br />
              New York, NY 10010
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-12 h-12 border border-accent/50 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-serif text-lg mb-2">Email</h3>
            <a 
              href="mailto:angelicaaestheticsny@gmail.com" 
              className="font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors"
            >
              angelicaaestheticsny@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-12 h-12 border border-accent/50 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-serif text-lg mb-2">Phone</h3>
            <a 
              href="tel:+13475244770" 
              className="font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors"
            >
              (347) 524-4770
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-12 h-12 border border-accent/50 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-serif text-lg mb-2">Hours</h3>
            <p className="font-sans text-sm text-primary-foreground/70">
              Mon - Sun<br />
              9am - 7pm
            </p>
          </motion.div>
        </div>

        {/* Elegant Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl md:text-2xl font-light mb-2 tracking-wide">Find Us</h3>
            <p className="font-sans text-xs text-primary-foreground/60">In the heart of Manhattan, Flatiron District</p>
          </div>
          
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-2 md:-inset-3 border border-accent/20 pointer-events-none" />
            <div className="absolute -inset-1 border border-accent/40 pointer-events-none" />
            
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-accent" />
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-accent" />
            <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 border-accent" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-accent" />
            
            <div className="relative overflow-hidden bg-secondary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99138492404069!3d40.74455987138882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f71c3f87%3A0x8d1c5c5d5f0e8f5f!2s37%20W%2026th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1706900000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Angelica Aesthetics Location"
                className="w-full"
              />
              {/* Overlay gradient for elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Map label */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-primary/95 backdrop-blur-sm px-4 py-2 border border-accent/30">
            <p className="font-serif text-xs tracking-wide text-center">
              37 West 26th Street, 7th Floor
              <span className="block text-xs text-primary-foreground/60 mt-0.5 font-sans">New York, NY 10010</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
