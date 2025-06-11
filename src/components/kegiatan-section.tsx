"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const kegiatanList = [
  {
    src: "/kegiatan11.jpg",
    title: "Istigosah",
    desc: "Meningkatkan keimanan dan ketakwaan siswa melalui doa dan dzikir bersama.",
    gallery: ["/kegiatan11.jpg", "/kegiatan12.jpg", "/kegiatan13.jpg"],
  },
  {
    src: "/kegiatan21.jpg",
    title: "Gebyar P5",
    desc: "Pameran hasil karya dan aktivitas siswa dalam kegiatan Projek Penguatan Profil Pelajar Pancasila.",
    gallery: ["/kegiatan21.jpg", "/kegiatan22.jpg", "/kegiatan23.jpg"],
  },
  {
    src: "/kegiatan31.jpg",
    title: "PSKA",
    desc: "Pembinaan Siswa Kelas Akhir untuk menghadapi ujian akhir dengan persiapan matang.",
    gallery: ["/kegiatan31.jpg", "/kegiatan32.jpg", "/kegiatan33.jpg"],
  },
];

export default function KegiatanSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof kegiatanList[0] | null>(null);

  const handleOpen = (item: typeof kegiatanList[0]) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Kegiatan Siswa</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {kegiatanList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOpen(item)}
              className="group rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl bg-white cursor-pointer flex flex-col"
            >
              {/* Frame gambar tetap rasio 16:9 */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Deskripsi */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-6">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
              </DialogHeader>

              <p className="text-sm text-gray-600 mb-4">{selected.desc}</p>

              <Carousel className="w-full">
                <CarouselContent>
                  {selected.gallery.map((img, i) => (
                    <CarouselItem key={i} className="w-full">
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                        <Image
                          src={img}
                          alt={`${selected.title} ${i + 1}`}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
