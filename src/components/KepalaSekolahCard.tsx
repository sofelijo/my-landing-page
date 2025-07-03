"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EyeButton from "@/components/EyeButton";

export default function KepalaSekolahSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Profil Sekolah
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Kiri: Kepala & Waka */}
          <div className="flex flex-col space-y-6">
            {/* Kepala Sekolah */}
            <motion.div
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-6 transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
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
            </motion.div>

            {/* Wakil Kepala Sekolah */}
            <motion.div
              className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-6 transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center sm:text-right space-y-1 sm:ml-auto">
                <p className="text-sm text-gray-500">Wakil Kepala Sekolah</p>
                <h3 className="text-xl font-semibold text-gray-800">Ilan Lesdoka</h3>
                <p className="text-sm text-gray-500">
                  Universitas Negeri Jakarta, Pendidikan Olahraga
                </p>
              </div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                <Image
                  src="/guru/02.jpg"
                  alt="Foto Wakil Kepala Sekolah"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Tombol */}
            <motion.div
              className="flex justify-center pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <EyeButton />
            </motion.div>
          </div>

          {/* Kanan: Visi Misi */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 flex flex-col justify-center h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
              Visi & Misi
            </h2>
            <p className="text-base text-gray-700 italic text-center mb-6">
              “Terwujudnya Peserta Didik yang Beriman, Bertaqwa, Cerdas, Terampil,
              Mandiri dan Berwawasan Global”
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
