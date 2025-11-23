"use client";
import Link from "next/link";
import { beritalist } from "@/app/data/berita";

export default function BeritaPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {beritalist.map((berita) => (
        <div
          key={berita.id}
          className="p-5 bg-[#0A1A33]/60 backdrop-blur-md rounded-xl shadow-lg border border-white/10 hover:scale-[1.03] hover:bg-[#0A1A33]/80 transition-all duration-300"
        >
          <h3 className="font-semibold text-xl text-blue-300 drop-shadow-md">
            {berita.name}
          </h3>

          <p className="text-sm text-gray-400 mt-1">{berita.tanggal}</p>

          <p className="mt-3 text-gray-300 text-sm leading-relaxed line-clamp-4">
            {berita.isi}
          </p>

          <Link
            href={`/berita/${berita.id}`}
            className="inline-block mt-4 text-blue-400 font-medium hover:text-blue-200 transition-all"
          >
            Lihat selengkapnya →
          </Link>
        </div>
      ))}

    </div>
  );
}
