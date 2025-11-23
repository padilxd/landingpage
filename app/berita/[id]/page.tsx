"use client";
import Sidebar from "@/components/sidebar";
import { beritalist } from "@/app/data/berita";

export default function DetailBerita({ params }: { params: { id: string } }) {
  const berita = beritalist.find((b) => b.id === params.id);

  return (
   
      <div className="bg-gray-900 p-6 rounded-md shadow-md">

        <h2 className="text-2xl font-bold text-blue-300 mb-2">
          {berita?.name}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {berita?.tanggal}
        </p>

        <p className="text-gray-300 leading-relaxed">
          {berita?.isi}
        </p>

        <a
          href="/berita"
          className="inline-block mt-6 text-blue-400 hover:text-blue-300"
        >
          ← Kembali ke daftar berita
        </a>

      </div>
 
  );
}
