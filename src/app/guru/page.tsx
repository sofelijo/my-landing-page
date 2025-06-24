"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    User,
    Mail,
    School,
    Calendar,
    BadgeInfo,
    Contact,
    Filter,
    Search,
} from "lucide-react";

type Guru = {
    nama: string;
    gelar: string;
    jabatan: string;
    jenis_kelamin: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    email: string;
    nip: string | null;
    nuptk: string | null;
    foto: string;
};

const kategoriJabatan = [
    "Semua",
    "Guru",
    "Kepala Sekolah",
    "Wakil Kepala Sekolah",
    "Tenaga Administrasi",
    "Tenaga Kebersihan",
    "PKSTI",
];

export default function GuruPage() {
    const [guruList, setGuruList] = useState<Guru[]>([]);
    const [filter, setFilter] = useState<string>("Semua");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        fetch("/data/guru_full.json")
            .then((res) => res.json())
            .then((data) => setGuruList(data));
    }, []);

    const filteredList = guruList.filter((guru) => {
        const matchesFilter =
            filter === "Semua" ||
            guru.jabatan.toLowerCase().includes(filter.toLowerCase());
        const matchesSearch =
            guru.nama.toLowerCase().includes(search.toLowerCase()) ||
            guru.email.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12">
            {/* Top control */}
{/* === MOBILE LAYOUT === */}
<div className="mb-6 block sm:hidden space-y-3">
  {/* Baris 1: Kembali & Filter */}
  <div className="flex justify-between items-center">
    <a
      href="/"
      className="inline-flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Kembali
    </a>

    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4 text-muted-foreground" />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm bg-white shadow-sm"
      >
        {kategoriJabatan.map((kategori) => (
          <option key={kategori} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* Baris 2: Search */}
  <div className="relative w-full">
    <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
    <input
      type="text"
      placeholder="Cari nama atau email..."
      className="pl-8 pr-3 py-2 w-full border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>

{/* === DESKTOP LAYOUT === */}
<div className="mb-6 hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-4">
  {/* Kembali kiri */}
  <a
    href="/"
    className="inline-flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    Kembali
  </a>

  {/* Filter + Search kanan */}
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4 text-muted-foreground" />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm bg-white shadow-sm"
      >
        {kategoriJabatan.map((kategori) => (
          <option key={kategori} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>

    <div className="relative w-64">
      <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Cari nama atau email..."
        className="pl-8 pr-3 py-2 w-full border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  </div>
</div>



            <h2 className="text-4xl font-bold text-center mb-12">
                Data Guru & Pegawai
            </h2>

            {filteredList.length === 0 ? (
                <p className="text-center text-gray-500">Data tidak ditemukan.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredList.map((guru, index) => (
                        <Card
                            key={index}
                            className="group rounded-2xl overflow-hidden shadow-md border bg-white hover:shadow-lg transition duration-300 p-0"
                        >
                            <div className="relative w-full h-80 overflow-hidden">
                                <img
                                    src={guru.foto}
                                    alt={`Foto ${guru.nama}`}
                                    className="w-full h-full object-cover object-top transform transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute top-3 left-3 group-hover:opacity-0 transition duration-300">
                                    <Badge className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full shadow-sm">
                                        <User className="w-3 h-3 mr-1 inline" />
                                        {guru.nama}, {guru.gelar}
                                    </Badge>
                                </div>

                                <div className="absolute top-3 right-3 group-hover:opacity-0 transition duration-300">
                                    <Badge variant="outline" className="bg-white/80 text-xs">
                                        {guru.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"}
                                    </Badge>
                                </div>

                                {guru.nip && (
                                    <div className="absolute bottom-10 left-3 group-hover:opacity-0 transition duration-300">
                                        <Badge className="bg-amber-100 text-amber-600 text-xs font-medium px-3 py-1 rounded-md">
                                            NIP: {guru.nip}
                                        </Badge>
                                    </div>
                                )}

                                <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition duration-300">
                                    <Badge className="bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-md hover:bg-indigo-200 transition">
                                        <a href={`mailto:${guru.email}`}>{guru.email}</a>
                                    </Badge>
                                </div>
                            </div>

                            <div className="pt-2 px-4 pb-4 space-y-2">
                                <div className="text-sm flex items-center gap-2 text-muted-foreground">
                                    <School className="w-4 h-4" />
                                    {guru.jabatan}
                                </div>

                                <div className="text-sm flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    {guru.tempat_lahir},{" "}
                                    {new Date(guru.tanggal_lahir).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </div>

                                {guru.nuptk && (
                                    <div className="text-sm flex items-center gap-2">
                                        <Contact className="w-4 h-4 text-gray-500" />
                                        NUPTK: {guru.nuptk}
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    );
}
