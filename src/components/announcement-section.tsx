import { AnnouncementCard } from "./announcement-card";

const announcementData = [
  {
    title: "Libur Idul Adha",
    date: "10 Juni 2025",
    content: "Sekolah akan libur selama 3 hari mulai 17 Juni dalam rangka Idul Adha.",
    badge: "Libur",
  },
  {
    title: "PPDB Dibuka!",
    date: "1 Juni 2025",
    content: "Pendaftaran Peserta Didik Baru telah dibuka. Silakan cek halaman PPDB untuk detail.",
    badge: "PPDB",
  },
  {
    title: "Lomba Kebersihan",
    date: "5 Juni 2025",
    content: "Diadakan lomba kebersihan antar kelas minggu depan. Semua kelas wajib berpartisipasi.",
    badge: "Lomba",
  },
];

export default function AnnouncementSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Pengumuman Sekolah</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {announcementData.map((item, index) => (
          <AnnouncementCard
            key={index}
            title={item.title}
            date={item.date}
            content={item.content}
            badge={item.badge}
          />
        ))}
      </div>
    </section>
  );
}
