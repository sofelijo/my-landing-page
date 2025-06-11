import Banner from "@/components/hero-banner";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import KegiatanSection from "@/components/kegiatan-section";
import EkstrakurikulerSection from "@/components/ekstrakurikuler-section";
import AnnouncementSection from "@/components/announcement-section";

export default function Home() {
  return (
    <main className="space-y-24">
      <Banner />

      {/* Pengumuman Sekolah */}

      {/* Visi Misi */}
      <section className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Visi & Misi</h2>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Video */}
          <div className="flex-1 h-auto">
            <div className="w-full h-full rounded-xl shadow-md overflow-hidden">
              <iframe
                className="w-full h-full min-h-[420px] md:min-h-0 aspect-[4/3] md:aspect-auto"
                src="https://www.youtube.com/embed/jQRbzGvlcQA"
                title="Video Profil Sekolah"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Teks Visi Misi */}
          <div className="flex-1 bg-white rounded-xl shadow-lg p-6 self-start">
            <p className="text-lg text-gray-700 italic text-center mb-4">
              “Terwujudnya Peserta Didik yang Beriman, Bertaqwa, Cerdas, Terampil, Mandiri dan Berwawasan Global”
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
              <li>Menciptakan Lingkungan yang Religius</li>
              <li>Melaksanakan Kegiatan Keagamaan</li>
              <li>Menumbuhkan perilaku peserta didik yang taat beribadah</li>
              <li>Mengembangkan Kompetensi Pendidik dan Tenaga Kependidikan</li>
              <li>Menciptakan Suasana pembelajaran yang aktif dan menyenangkan</li>
              <li>Menanamkan sikap kompetitif dalam diri peserta didik</li>
              <li>Menumbuhkan kreativitas, bakat, dan minat siswa</li>
              <li>Wujudkan prestasi melalui kegiatan akademik & non-akademik</li>
              <li>Menanamkan rasa hormat dan kasih sayang antar sesama</li>
              <li>Membimbing dengan kasih dalam lima karakter utama</li>
              <li>Memenuhi hak pendidikan semua peserta didik tanpa terkecuali</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Kegiatan Siswa */}
      <KegiatanSection />

      <EkstrakurikulerSection />


      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-20 py-10">
        © 2025 SDN Semper Barat 01. All rights reserved.
      </footer>
    </main>
  );
}
