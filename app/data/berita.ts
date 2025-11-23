export interface Berita {
  id: string;
  name: string;
  tanggal: string;
  isi: string;
}

export const beritalist: Berita[] = [
  {
    id: "1",
    name: "Pembangunan Menara City Light Tahap Pertama Resmi Dimulai",
    tanggal: "2024-06-01",
    isi: "City Light Indonesia resmi memulai pembangunan menara pertama yang akan menjadi ikon utama kawasan City Light District. Gedung ini dirancang dengan konsep futuristik, pencahayaan neon biru, dan teknologi ramah lingkungan yang menjadikannya pusat perhatian di malam hari.",
  },

  {
    id: "2",
    name: "Kawasan City Light District Diresmikan sebagai Zona Komersial Baru",
    tanggal: "2024-06-10",
    isi: "Setelah pembangunan tahap awal gedung utama selesai 70%, pemerintah daerah menetapkan City Light District sebagai kawasan komersial baru. Area ini diproyeksikan menjadi pusat hiburan dan bisnis dengan pencahayaan malam yang menjadi ciri khas utama.",
  }
];
