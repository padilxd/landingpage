import Sidebar from "@/components/sidebar";

export default function Profile() {
  return (
    <Sidebar title="Profil Kota">
      <div className="max-w-4xl mx-auto">

        {/* HEADER PROFILE */}
        <div className="relative bg-[url('/images/gedungs.jpg')] bg-cover bg-center h-64 rounded-xl shadow-xl overflow-hidden">
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg tracking-wide">
              City Light Indonesia
            </h1>
            <p className="text-gray-200 mt-2 text-lg drop-shadow">
              Kota masa depan dengan pesona malam tak tertandingi
            </p>
          </div>
        </div>

        {/* BIO SECTION */}
        <div className="mt-8 p-6 rounded-xl bg-[#0F172A] shadow-lg border border-blue-900/30 hover:border-blue-400/40 transition-all duration-300">
          <h2 className="text-2xl font-bold text-blue-300 mb-3">Tentang Kota</h2>
          <p className="text-gray-300 leading-relaxed">
            City Light Indonesia adalah kota futuristik yang dikenal dengan 
            gedung-gedung megah dan panorama malam yang menakjubkan.
            Setiap sudutnya dipenuhi lampu-lampu neon biru yang membuat kota 
            ini terlihat seperti dunia masa depan.
          </p>
        </div>

        {/* CARD KONDISI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

          {/* Card 1 */}
          <div className="bg-[#111827] p-5 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-blue-300">Populasi</h3>
            <p className="text-gray-400 mt-2">
              12.500.000+ penduduk dari seluruh penjuru dunia.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] p-5 rounded-xl shadow-md border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-blue-300">Wilayah</h3>
            <p className="text-gray-400 mt-2">
              Kota ini memiliki 12 distrik utama dengan konsep modern futuristik.
            </p>
          </div>

        </div>

        {/* GALLERY */}
        <h2 className="text-2xl font-bold text-blue-300 mt-10 mb-4">Galeri Kota</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
            <img src="/images/gedung.jpg" className="object-cover w-full h-48" />
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
            <img src="/images/gedungx.jpg" className="object-cover w-full h-48" />
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
            <img src="/images/gedunga.jpg" className="object-cover w-full h-48" />
          </div>

        </div>

      </div>
    </Sidebar>
  );
}
