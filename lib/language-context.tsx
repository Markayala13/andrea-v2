"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Language = "en" | "es"

const translations = {
  en: {
    nav: {
      about: "About",
      treatments: "Treatments",
      gallery: "Gallery",
      faq: "FAQ",
      contact: "Contact",
      bookNow: "Book Now",
      cancellationPolicy: "Cancellation Policy",
    },
    hero: {
      title: "LASER HAIR REMOVAL",
      subtitle: "Advanced laser technology for smooth, confident skin.",
      location: "Located in Manhattan, New York.",
      bookNow: "Book Now",
    },
    about: {
      title: "About Us",
      p1: "At Angelica Aesthetics, we specialize in advanced laser hair removal and skin-enhancing treatments designed for people who value results, confidence, and their time.",
      p2: "Located in Manhattan, New York, our private studio offers an elevated experience using advanced laser technology and professional skin treatments suitable for multiple skin types.",
      p3: "Every service is customized to your unique skin needs, goals, and lifestyle to ensure safe, effective, and lasting results. Our goal is to deliver safe, effective results while helping you achieve smooth, confident, and glowing skin.",
      yearsExperience: "Years Experience",
      happyClients: "Happy Clients",
      skinTypes: "Skin Types",
    },
    treatments: {
      title: "Our Treatments",
      subtitle: "Premium aesthetic treatments designed to enhance your natural beauty with lasting results.",
      facialTitle: "Facial Treatments",
      laserTitle: "Laser Hair Removal",
      laserDescription: "Uses focused light to disable the hair follicle safely and effectively. Cooling is used for comfort, pulses are quick, and there's no downtime.",
      smallAreas: "Small Areas",
      smallAreasSubtitle: "Quick & precise",
      mediumAreas: "Medium Areas",
      mediumAreasSubtitle: "Most popular",
      largeAreas: "Large Areas",
      largeAreasSubtitle: "Full coverage",
      addOnsTitle: "Glow Boost Add-Ons",
      popular: "POPULAR",
      consult: "Consult",
      facials: [
        { name: "Express Facial", description: "Get glowing in just 30 minutes. Deeply cleanses, exfoliates, and hydrates for an instant, radiant boost. Perfect for busy clients." },
        { name: "Deep Cleansing Facial", description: "A deep reset for your skin. Removes buildup, unclogs pores, exfoliates dull skin using microdermabrasion, steam, extractions, and a nourishing mask." },
        { name: "Glow Genesis", description: "Laser Genesis for a glassy-skin glow. Boosts collagen, fades acne scars, calms redness, shrinks pores without peeling or downtime." },
        { name: "The Lifted Glow Facial", description: "A rejuvenating treatment using Radio Frequency to firm, lift, and boost elasticity while nourishing serums leave skin silky and radiant." },
        { name: "Luminous Lift Facial", description: "A sculpting, tension-relieving facial using Gua Sha to lift, define, and reveal your natural glow. Promotes lymphatic drainage and boosts circulation." },
        { name: "Microneedling Treatment", description: "Stimulates collagen and elastin using ultra-fine needles to smooth texture, fade acne scars, minimize pores, and soften fine lines. Best in a series of 3-6 sessions." },
      ],
      laserSmallAreas: [
        { area: "Upper Lip" }, { area: "Chin" }, { area: "Sideburns" }, { area: "Ears" },
      ],
      laserMediumAreas: [
        { area: "Underarms" }, { area: "Bikini Line" }, { area: "Half Arms" },
        { area: "Half Legs" }, { area: "Inner Thighs" }, { area: "Lower Back" },
      ],
      laserLargeAreas: [
        { area: "Brazilian" }, { area: "Chest" }, { area: "Full Back" },
        { area: "Full Arms" }, { area: "Abdomen + Chest" }, { area: "Full Legs" },
      ],
      addOns: [
        { name: "Gua Sha Sculpt & Lift", description: "Lift, contour, and promote lymphatic drainage with a soothing facial massage." },
        { name: "LED Light Therapy", description: "Target fine lines, acne, or redness with gentle, skin-reviving LED light." },
        { name: "Oxygen Glow Infusion", description: "Boosts hydration, stimulates collagen, and leaves skin radiant and plump." },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How many treatments will I need?",
          answer: "Most clients need 9-12 sessions for optimal, long-lasting hair reduction. Treatments are spaced 4-8 weeks apart, depending on the area, since laser only targets hair in its active growth phase. The exact number of sessions may vary based on the treatment area, hair thickness, skin type, and hormonal factors.",
        },
        {
          question: "Is laser Hair Removal safe for all skin types?",
          answer: "Yes! Our advanced GentleMax Pro Plus by Candela laser technology is safe and effective for multiple skin types, including darker skin tones. We customize the settings for each client to ensure the safest, most effective treatment possible while delivering optimal results.",
        },
        {
          question: "Does Laser Hair Removal Hurts?",
          answer: "Most clients say laser hair removal feels like a quick little rubber band snap — slightly uncomfortable, but very tolerable. The good news? The sensation is super fast, and treatments are quick.",
        },
      ],
    },
    contact: {
      title: "Ready to Book Your First Appointment?",
      subtitle: "We are here to help you start your journey towards smooth, confident skin. Click the button to book your appointment or free consultation with us.",
      bookNow: "Book Now",
      bookingAgreement: "By booking, you agree to our",
      cancellationPolicy: "Cancellation Policy",
      address: "Address",
      email: "Email",
      phone: "Phone",
      hours: "Hours",
      hoursLine1: "Mon - Sun",
      hoursLine2: "9am - 7pm",
      findUs: "Find Us",
      findUsSubtitle: "In the heart of Manhattan, Flatiron District",
    },
    footer: {
      description: "Advanced laser hair removal and skin-enhancing treatments in Manhattan, New York.",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      cancellationPolicy: "Cancellation Policy",
    },
    policy: {
      title: "Cancellation Policy",
      intro: "At Angelica Aesthetics, your time and satisfaction are very important to us. To ensure we can provide the best service to all of our clients, we kindly ask that you review our cancellation policy below:",
      section1Title: "Appointment Cancellations & Rescheduling",
      section1p1: { before: "We require at least ", bold: "24 hours' notice", after: " to cancel or reschedule an appointment. This allows us to accommodate other clients who may be waiting for an opening." },
      section1p2: { before: "Cancellations made less than 24 hours in advance will result in a ", bold: "$50 late cancellation fee", after: "." },
      section1p3: { before: "If you do not show up for your appointment without notice, you will be charged a ", bold: "$75 no-show fee", after: "." },
      section2Title: "Running Late?",
      section2p: { before: "We understand things happen! If you are running late, please contact us as soon as possible. Arriving more than ", bold: "10 minutes late", after: " may result in shortened service time or a rescheduled appointment, depending on availability." },
      section3Title: "Package Appointments",
      section3p: "Missed or late-cancelled appointments under a package plan will count as used sessions if not canceled within the 24-hour window.",
      section4Title: "How to Cancel or Reschedule",
      section4intro: "You can cancel or reschedule your appointment through:",
      section4item1: "Our online booking system",
      section4item2: "Calling or texting us at",
      section4item3: "Emailing us at",
      closing: "Thank you for respecting our time and policies. This helps us maintain a high level of care for all of our clients.",
    },
  },
  es: {
    nav: {
      about: "Nosotros",
      treatments: "Tratamientos",
      gallery: "Galería",
      faq: "Preguntas",
      contact: "Contacto",
      bookNow: "Reservar",
      cancellationPolicy: "Política de Cancelación",
    },
    hero: {
      title: "DEPILACIÓN LÁSER",
      subtitle: "Tecnología láser avanzada para una piel suave y segura.",
      location: "Ubicados en Manhattan, Nueva York.",
      bookNow: "Reservar",
    },
    about: {
      title: "Sobre Nosotros",
      p1: "En Angelica Aesthetics, nos especializamos en depilación láser avanzada y tratamientos para la piel diseñados para personas que valoran los resultados, la confianza y su tiempo.",
      p2: "Ubicados en Manhattan, Nueva York, nuestro estudio privado ofrece una experiencia elevada utilizando tecnología láser avanzada y tratamientos profesionales para la piel adecuados para múltiples tipos de piel.",
      p3: "Cada servicio se personaliza según sus necesidades únicas de piel, objetivos y estilo de vida para garantizar resultados seguros, efectivos y duraderos. Nuestro objetivo es brindar resultados seguros y efectivos mientras le ayudamos a lograr una piel suave, segura y radiante.",
      yearsExperience: "Años de Experiencia",
      happyClients: "Clientes Felices",
      skinTypes: "Tipos de Piel",
    },
    treatments: {
      title: "Nuestros Tratamientos",
      subtitle: "Tratamientos estéticos premium diseñados para realzar tu belleza natural con resultados duraderos.",
      facialTitle: "Tratamientos Faciales",
      laserTitle: "Depilación Láser",
      laserDescription: "Utiliza luz concentrada para desactivar el folículo piloso de forma segura y efectiva. Se aplica enfriamiento para mayor comodidad, los pulsos son rápidos y no hay tiempo de recuperación.",
      smallAreas: "Áreas Pequeñas",
      smallAreasSubtitle: "Rápido y preciso",
      mediumAreas: "Áreas Medianas",
      mediumAreasSubtitle: "Las más populares",
      largeAreas: "Áreas Grandes",
      largeAreasSubtitle: "Cobertura completa",
      addOnsTitle: "Complementos Glow",
      popular: "POPULAR",
      consult: "Consulta",
      facials: [
        { name: "Express Facial", description: "Luce radiante en solo 30 minutos. Limpia profundamente, exfolia e hidrata para un impulso de luminosidad instantáneo. Perfecto para clientes con poco tiempo." },
        { name: "Deep Cleansing Facial", description: "Un reinicio profundo para tu piel. Elimina impurezas, descongestiona los poros, exfolia la piel opaca con microdermoabrasión, vapor, extracciones y una mascarilla nutritiva." },
        { name: "Glow Genesis", description: "Laser Genesis para un brillo de piel de vidrio. Estimula el colágeno, atenúa las cicatrices del acné, calma el enrojecimiento y reduce los poros sin descamación ni tiempo de recuperación." },
        { name: "The Lifted Glow Facial", description: "Un tratamiento rejuvenecedor con Radiofrecuencia para tensar, levantar y aumentar la elasticidad, mientras que los sueros nutritivos dejan la piel sedosa y radiante." },
        { name: "Luminous Lift Facial", description: "Un facial escultor y relajante con Gua Sha para levantar, definir y revelar tu brillo natural. Promueve el drenaje linfático y mejora la circulación." },
        { name: "Microneedling Treatment", description: "Estimula el colágeno y la elastina con agujas ultrafinas para suavizar la textura, atenuar cicatrices de acné, minimizar poros y reducir líneas finas. Mejor en una serie de 3 a 6 sesiones." },
      ],
      laserSmallAreas: [
        { area: "Labio Superior" }, { area: "Mentón" }, { area: "Patillas" }, { area: "Orejas" },
      ],
      laserMediumAreas: [
        { area: "Axilas" }, { area: "Bikini" }, { area: "Medio Brazo" },
        { area: "Media Pierna" }, { area: "Cara Interna del Muslo" }, { area: "Zona Lumbar" },
      ],
      laserLargeAreas: [
        { area: "Brasileño" }, { area: "Pecho" }, { area: "Espalda Completa" },
        { area: "Brazo Completo" }, { area: "Abdomen + Pecho" }, { area: "Pierna Completa" },
      ],
      addOns: [
        { name: "Gua Sha Sculpt & Lift", description: "Levanta, contornea y promueve el drenaje linfático con un suave masaje facial." },
        { name: "LED Light Therapy", description: "Trata líneas finas, acné o enrojecimiento con luz LED suave que revitaliza la piel." },
        { name: "Oxygen Glow Infusion", description: "Aumenta la hidratación, estimula el colágeno y deja la piel radiante y tersa." },
      ],
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Cuántos tratamientos necesitaré?",
          answer: "La mayoría de los clientes necesitan entre 9 y 12 sesiones para una reducción del vello óptima y duradera. Los tratamientos se espacian entre 4 y 8 semanas, dependiendo del área, ya que el láser solo actúa sobre el cabello en su fase de crecimiento activo. El número exacto de sesiones puede variar según el área de tratamiento, el grosor del vello, el tipo de piel y factores hormonales.",
        },
        {
          question: "¿Es la depilación láser segura para todos los tipos de piel?",
          answer: "¡Sí! Nuestra avanzada tecnología láser GentleMax Pro Plus de Candela es segura y eficaz para múltiples tipos de piel, incluidos los tonos más oscuros. Personalizamos la configuración para cada cliente a fin de garantizar el tratamiento más seguro y efectivo posible, brindando resultados óptimos.",
        },
        {
          question: "¿Duele la depilación láser?",
          answer: "La mayoría de los clientes dicen que la depilación láser se siente como un pequeño chasquido de banda elástica: levemente incómodo, pero muy tolerable. ¿La buena noticia? La sensación es muy rápida y los tratamientos son breves.",
        },
      ],
    },
    contact: {
      title: "¿Lista para Reservar tu Primera Cita?",
      subtitle: "Estamos aquí para ayudarte a comenzar tu camino hacia una piel suave y segura. Haz clic en el botón para reservar tu cita o consulta gratuita.",
      bookNow: "Reservar",
      bookingAgreement: "Al reservar, aceptas nuestra",
      cancellationPolicy: "Política de Cancelación",
      address: "Dirección",
      email: "Correo",
      phone: "Teléfono",
      hours: "Horario",
      hoursLine1: "Lun - Dom",
      hoursLine2: "9am - 7pm",
      findUs: "Encuéntranos",
      findUsSubtitle: "En el corazón de Manhattan, Distrito Flatiron",
    },
    footer: {
      description: "Depilación láser avanzada y tratamientos para la piel en Manhattan, Nueva York.",
      contact: "Contacto",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados.",
      cancellationPolicy: "Política de Cancelación",
    },
    policy: {
      title: "Política de Cancelación",
      intro: "En Angelica Aesthetics, tu tiempo y satisfacción son muy importantes para nosotros. Para garantizar el mejor servicio a todos nuestros clientes, te pedimos amablemente que revises nuestra política de cancelación a continuación:",
      section1Title: "Cancelaciones y Reprogramaciones",
      section1p1: { before: "Requerimos al menos ", bold: "24 horas de aviso", after: " para cancelar o reprogramar una cita. Esto nos permite atender a otros clientes que puedan estar esperando." },
      section1p2: { before: "Las cancelaciones realizadas con menos de 24 horas de anticipación resultarán en un ", bold: "cargo de $50 por cancelación tardía", after: "." },
      section1p3: { before: "Si no se presenta a su cita sin previo aviso, se le cobrará un ", bold: "cargo de $75 por no presentarse", after: "." },
      section2Title: "¿Llega Tarde?",
      section2p: { before: "¡Entendemos que pueden surgir imprevistos! Si llega tarde, comuníquese con nosotros lo antes posible. Llegar más de ", bold: "10 minutos tarde", after: " puede resultar en un servicio acortado o en una cita reprogramada, según disponibilidad." },
      section3Title: "Citas de Paquetes",
      section3p: "Las citas perdidas o canceladas tardíamente dentro de un plan de paquete contarán como sesiones utilizadas si no se cancelan dentro de las 24 horas.",
      section4Title: "Cómo Cancelar o Reprogramar",
      section4intro: "Puede cancelar o reprogramar su cita a través de:",
      section4item1: "Nuestro sistema de reservas en línea",
      section4item2: "Llamándonos o enviándonos un mensaje al",
      section4item3: "Enviándonos un correo a",
      closing: "Gracias por respetar nuestro tiempo y políticas. Esto nos ayuda a mantener un alto nivel de atención para todos nuestros clientes.",
    },
  },
}

export type Translations = typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
