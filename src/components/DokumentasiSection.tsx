"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";

const videos = [
  {
    url: "https://www.youtube.com/embed/jQRbzGvlcQA",
  },
  {
    url: "https://www.youtube.com/embed/ocWuNkj_Eqk",
  },
  // Tambahkan video lain di sini jika perlu
];

export default function DokumentasiSection() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
  });

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dokumentasi
      </motion.h2>

      <div ref={sliderRef} className="keen-slider">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide px-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="aspect-[4/3] w-full">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
