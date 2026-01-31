"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState, useRef } from "react";

const videos = [
  { id: 1, src: "/video/Video.mov", title: "Treatment Session 1", poster: "/images/treatment-1.png" },
  { id: 2, src: "/video/Video_1.mov", title: "Treatment Session 2", poster: "/images/treatment-2.jpeg" },
  { id: 3, src: "/video/Video_2.mov", title: "Treatment Session 3", poster: "/images/treatment-3.jpeg" },
  { id: 4, src: "/video/Video_3.mov", title: "Treatment Session 4", poster: "/images/treatment-4.jpeg" },
  { id: 5, src: "/video/Video_4.mov", title: "Treatment Session 5", poster: "/images/treatment-5.jpeg" },
  { id: 6, src: "/video/Video_5.mov", title: "Treatment Session 6", poster: "/images/treatment-6.jpeg" },
  { id: 7, src: "/video/Video_6.mov", title: "Treatment Session 7", poster: "/images/treatment-7.jpeg" },
  { id: 8, src: "/video/Video_7.mov", title: "Treatment Session 8", poster: "/images/treatment-1.png" },
  { id: 9, src: "/video/Video_8.mov", title: "Treatment Session 9", poster: "/images/treatment-2.jpeg" },
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Watch Our Process
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            See the Transformation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Experience our treatments through the eyes of our clients. Watch real sessions
            and witness the precision and care we bring to every appointment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Video Display */}
          <div className="relative aspect-video bg-foreground/5 border border-border overflow-hidden">
            <video
              ref={videoRef}
              key={videos[currentIndex].src}
              className="w-full h-full object-cover"
              controls
              poster={videos[currentIndex].poster}
              playsInline
            >
              <source src={videos[currentIndex].src} type="video/quicktime" />
              <source src={videos[currentIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/30 pointer-events-none" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/30 pointer-events-none" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-foreground transition-all duration-300 z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-foreground transition-all duration-300 z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-8 flex-wrap"
        >
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => handleThumbnailClick(index)}
              className={`relative w-20 md:w-28 aspect-video border transition-all duration-300 overflow-hidden ${
                index === currentIndex
                  ? "border-accent ring-2 ring-accent/50"
                  : "border-border hover:border-foreground/40"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${video.poster})` }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className={`w-4 h-4 ${index === currentIndex ? "text-accent" : "text-white/70"}`} />
              </div>
              {index === currentIndex && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12 text-sm tracking-wide"
        >
          Follow us on Instagram for more treatment videos and results
        </motion.p>
      </div>
    </section>
  );
}
