import Banner from "@/components/hero-banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" space-y-16">
      <Banner />
      {/* Tambahan section di bawah */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Visi & Misi</h2>
        <p className="text-gray-700">“Terwujudnya Peserta Didik yang Beriman, Bertaqwa, Cerdas, Terampil, Mandiri dan Berwawasan Global”</p>
        <ul className="list-disc list-inside mt-4 text-left text-gray-600">
          <li>Menciptakan Lingkungan yang Religius</li>
          <li>Melaksanakan Kegiatan KeagamaanMelaksanakan Kegiatan Keagamaan</li>
          <li>Menumbuhkan prilaku Peserta didik yang taat beribadah</li>
          <li>Mengembangkan Kompetensi Pendidik dan Tenaga Kependidikan di Lingkungan Sekolah</li>
          <li>Menciptakan Suasana pembelajaran yang aktif, inovatif, kreatif, efektif, dan menyenangkan.</li>
          <li>Menanamkan sikap kompetitif dalam diri peserta didik.</li>
          <li>Menumbuhkembangkan kreativitas, bakat, dan minat peserta didik.</li>
          <li>Mewujudkan peserta didik berprestasi melalui kegiatan akademik maupun non akademik</li>
          <li>Menanamkan rasa saling menghormati,menyayangi, dan menghargai sesama</li>
          <li>Membimbing peserta didik dengan kasih saying dalam bentuk lima karakter utama</li>
          <li>Memenuhi semua hak peserta didik tanpa terkecuali dalam memperoleh pendidikan</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Kegiatan Siswa</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Image
              src="/kegiatan1.jpg"
              alt="Kegiatan Pramuka"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-lg font-semibold mt-2">Pramuka</h3>
            <p className="text-sm text-gray-600">Melatih kedisiplinan dan kerja sama tim sejak dini.</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Image
              src="/kegiatan2.jpg"
              alt="Kegiatan Upacara"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-lg font-semibold mt-2">Upacara Bendera</h3>
            <p className="text-sm text-gray-600">Menanamkan rasa cinta tanah air dan kedisiplinan.</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <Image
              src="/kegiatan3.jpg"
              alt="Kegiatan Lomba"
              width={400}
              height={250}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-lg font-semibold mt-2">Lomba 17 Agustus</h3>
            <p className="text-sm text-gray-600">Meningkatkan kreativitas dan semangat kebersamaan antar siswa.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-20">
        © 2025 SDN Semper Barat 01. All rights reserved.
      </footer>
    </main>
  );
}
