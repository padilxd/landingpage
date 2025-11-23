import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <Sidebar title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

    
       <div className="p-4 shadow-md bg bg-gray-900 rounded-md hover:scale-105 transition-all duration-300">
          <img
            src="/images/gedung.jpg"
            alt="gedung"
            className="rounded-md w-full h-48 object-cover mb-4"
          />
          <h2 className="font-semibold text-lg">TGP tahun 2500</h2>
          <p className="text-gray-600 text-sm">Selamat datang di TGP saat tahun 2500</p>
        </div>

         <div className="p-4 shadow-md bg bg-gray-900 rounded-md hover:scale-105 transition-all duration-300">
          <img
            src="/images/gedungx.jpg"
            alt="gedung"
            className="rounded-md w-full h-48 object-cover mb-4"
          />
          <h2 className="font-semibold text-lg">Jabung, 502</h2>
          <p className="text-gray-600 text-sm">Selamat datang di 502</p>
        </div>

       
        <div className="p-4 shadow-md bg bg-gray-900 rounded-md hover:scale-105 transition-all duration-300">
          <img
            src="/images/gedunga.jpg"
            alt="gedung"
            className="rounded-md w-full h-48 object-cover mb-4"
          />
          <h2 className="font-semibold text-lg">Pakis, Perumahan Graha Puntadewa</h2>
          <p className="text-gray-600 text-sm">Selamat datang di Graha Puntadewa</p>
        </div>

      </div>
    </Sidebar>
    
  );
}
