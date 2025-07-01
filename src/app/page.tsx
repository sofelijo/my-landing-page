import Banner from "@/components/hero-banner";
import KegiatanSection from "@/components/kegiatan-section";
import EkstrakurikulerSection from "@/components/ekstrakurikuler-section";
import KepalaSekolahCard from "@/components/KepalaSekolahCard";
import DokumentasiSection from "@/components/DokumentasiSection";


export default function Home() {
  return (
    <main className="space-y-24">
      <Banner />

      {/* Pengumuman Sekolah */}

    
      <DokumentasiSection />
      <KepalaSekolahCard />
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
