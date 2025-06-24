"use client";

export default function DokumentasiSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Dokumentasi</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Video 1 */}
        <div className="flex-1">
          <div className="aspect-[4/3] w-full rounded-xl shadow-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jQRbzGvlcQA"
              title="Video Profil Sekolah"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 */}
        <div className="flex-1">
          <div className="aspect-[4/3] w-full rounded-xl shadow-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ocWuNkj_Eqk"
              title="Video Kegiatan Sekolah"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
