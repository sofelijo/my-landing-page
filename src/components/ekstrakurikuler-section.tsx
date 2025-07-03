"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ekstrakurikulerList = [
  {
    title: "Pramuka",
    image: "/ekstra/pramuka.jpg",
    description:
      "Melatih kedisiplinan, kepemimpinan, dan kerjasama tim melalui kegiatan kepramukaan rutin.",
  },
  {
    title: "Pencak Silat",
    image: "/ekstra/silat.jpg",
    description:
      "Mengembangkan keterampilan bela diri tradisional, sportivitas, dan kepercayaan diri.",
  },
  {
    title: "Tari Tradisional",
    image: "/ekstra/tari.jpg",
    description:
      "Melestarikan budaya bangsa melalui seni tari daerah dan pertunjukan rutin.",
  },
  {
    title: "Futsal",
    image: "/ekstra/futsal.jpg",
    description:
      "Meningkatkan kebugaran dan kekompakan siswa melalui latihan dan pertandingan futsal.",
  },
  {
    title: "Marawiss",
    image: "/ekstra/marawis.jpg",
    description:
      "Menumbuhkan kecintaan terhadap seni musik Islami melalui grup marawis sekolah.",
  },
  {
    title: "PMR",
    image: "/ekstra/PMR.jpg",
    description:
      "Membangun dan mengembangkan karakter kepalangmerahan pada diri remaja.",
  },
];

export default function EkstrakurikulerSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ekstrakurikuler
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ekstrakurikulerList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Gambar: ikut membesar saat hover */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Konten teks */}
              <div className="px-4 py-3 space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
