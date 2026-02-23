"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface CancellationPolicyModalProps {
  open: boolean
  onClose: () => void
}

export function CancellationPolicyModal({ open, onClose }: CancellationPolicyModalProps) {
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
                <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground tracking-wide">Cancellation Policy</h2>
                <button
                  onClick={onClose}
                  className="ml-4 flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="w-16 h-px bg-accent mb-6" />
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                At Angelica Aesthetics, your time and satisfaction are very important to us. To ensure we can provide the best service to all of our clients, we kindly ask that you review our cancellation policy below:
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">Appointment Cancellations & Rescheduling</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                We require at least <span className="text-foreground font-medium">24 hours' notice</span> to cancel or reschedule an appointment. This allows us to accommodate other clients who may be waiting for an opening.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                Cancellations made less than 24 hours in advance will result in a <span className="text-foreground font-medium">$50 late cancellation fee</span>.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                If you do not show up for your appointment without notice, you will be charged a <span className="text-foreground font-medium">$75 no-show fee</span>.
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">Running Late?</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                We understand things happen! If you are running late, please contact us as soon as possible. Arriving more than <span className="text-foreground font-medium">10 minutes late</span> may result in shortened service time or a rescheduled appointment, depending on availability.
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">Package Appointments</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                Missed or late-cancelled appointments under a package plan will count as used sessions if not canceled within the 24-hour window.
              </p>

              <h3 className="font-serif text-lg text-foreground mb-3">How to Cancel or Reschedule</h3>
              <p className="font-sans text-sm text-muted-foreground mb-2">You can cancel or reschedule your appointment through:</p>
              <ul className="font-sans text-sm text-muted-foreground space-y-1 mb-6 list-none">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />Our online booking system</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />Calling or texting us at <a href="tel:+13475244770" className="text-accent hover:underline">347 524 4770</a></li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />Emailing us at <a href="mailto:info@angelicaaesthetics.com" className="text-accent hover:underline">info@angelicaaesthetics.com</a></li>
              </ul>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
                Thank you for respecting our time and policies. This helps us maintain a high level of care for all of our clients.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
