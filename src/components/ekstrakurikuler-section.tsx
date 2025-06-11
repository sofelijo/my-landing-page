"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const ekstrakurikulerList = [
  {
    title: "Pramuka",
    image: "/ekstra/pramuka.jpg",
    description: "Melatih kedisiplinan, kepemimpinan, dan kerjasama tim melalui kegiatan kepramukaan rutin.",
  },
  {
    title: "Pencak Silat",
    image: "/ekstra/silat.jpg",
    description: "Mengembangkan keterampilan bela diri tradisional, sportivitas, dan kepercayaan diri.",
  },
  {
    title: "Tari Tradisional",
    image: "/ekstra/tari.jpg",
    description: "Melestarikan budaya bangsa melalui seni tari daerah dan pertunjukan rutin.",
  },
  {
    title: "Futsal",
    image: "/ekstra/futsal.jpg",
    description: "Meningkatkan kebugaran dan kekompakan siswa melalui latihan dan pertandingan futsal.",
  },
  {
    title: "Marawis",
    image: "/ekstra/marawis.jpg",
    description: "Menumbuhkan kecintaan terhadap seni musik Islami melalui grup marawis sekolah.",
  },
];

export default function EkstrakurikulerSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Ekstrakurikuler</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ekstrakurikulerList.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-md hover:shadow-xl transition-shadow p-0 rounded-2xl"
          >
            {/* GAMBAR (tanpa padding) */}
            <div className="relative aspect-video w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* ISI (kena padding) */}
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
