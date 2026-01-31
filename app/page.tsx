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

export default function Home() {
  return (
    <>
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
    </>
  )
}
