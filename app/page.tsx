import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Packages } from "@/components/packages"
import { Gallery } from "@/components/gallery"
import { VideoCarousel } from "@/components/video-carousel"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"
import { LanguageProvider } from "@/lib/language-context"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <LanguageProvider>
      <Preloader />
      <CustomCursor />
      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Packages />
        <Gallery />
        <VideoCarousel />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
    </LanguageProvider>
  )
}
