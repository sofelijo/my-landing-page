"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function KepalaSekolahSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Profil Sekolah</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Kiri: Kepala & Waka */}
        <div className="flex flex-col space-y-6">
          {/* Baris 1: Kepala Sekolah */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-xl shadow-lg p-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/guru/01.jpg"
                alt="Foto Kepala Sekolah"
                fill
                className="object-cover object-top"
              />

            </div>
            <div className="text-center sm:text-left space-y-1">
              <p className="text-sm text-gray-500">Kepala Sekolah</p>
              <h3 className="text-xl font-semibold text-gray-800">Kartika</h3>
              <p className="text-sm text-gray-500">
                Universitas Negeri Padang, Pendidikan Ekonomi
              </p>
            </div>
          </div>

          {/* Baris 2: Wakil Kepala Sekolah */}
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-6 bg-white rounded-xl shadow-lg p-6">
            <div className="text-center sm:text-right space-y-1 sm:ml-auto">
              <p className="text-sm text-gray-500">Wakil Kepala Sekolah</p>
              <h3 className="text-xl font-semibold text-gray-800">Ilan Lesdoka</h3>
              <p className="text-sm text-gray-500">
                Universitas Negeri Jakarta, Pendidikan Olahraga
              </p>
            </div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/guru/02.jpg"
                alt="Foto Wakil Kepala Sekolah"
                fill
                className="object-cover object-top"
              />

            </div>
          </div>

          {/* Baris 3: Tombol */}
          <div className="flex justify-center pt-2">
            <Button className="px-6" onClick={() => (window.location.href = "/guru")}>
              Lihat semua guru
            </Button>
          </div>
        </div>

        {/* Kanan: Visi Misi */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center h-full">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-4">Visi & Misi</h2>
          <p className="text-base text-gray-700 italic text-center mb-4">
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
  );
}
