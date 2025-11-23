"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  children: ReactNode;
  title: string;
};

export default function Sidebar({ children, title }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0D0D0D] text-gray-200">

      
      <nav className="bg-[#0A1A33] text-white flex justify-between items-center px-6 py-3 shadow-lg relative">
<div className="flex items-center gap-3">
            <img
              src="/images/logs.png"
              alt="logo"
              className="w-20 h-20 scale-280 object-contain"
            />
            <h1 className="text-xl font-bold tracking-wide cursor-default">
           
            </h1>
          </div>
        <div className="hidden md:flex gap-10">
          <Link
            href="/"
            className="relative text-xl font-semibold text-gray-100 hover:text-blue-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
            after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <Link
            href="/profile"
            className="relative text-xl font-semibold text-gray-100 hover:text-blue-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
            after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Profil
          </Link>

          <Link
            href="/berita"
            className="relative text-xl font-semibold text-gray-100 hover:text-blue-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
            after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Berita
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl font-bold"
        >
          {isOpen ? "❌" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#0A1A33] text-white px-6 py-4 gap-4 shadow-md">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>Profil</Link>
          <Link href="/berita" onClick={() => setIsOpen(false)}>Berita</Link>
        </div>
      )}

     
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-300">{title}</h1>

        {pathname === "/" && (
          <div className="text-center">
            <div className="text-2xl mb-2 text-gray-100">{title}</div>

            <div className="relative bg-[url('/images/gedungs.jpg')] bg-cover bg-center h-60 mt-4 rounded-md shadow-lg">
  
  <div className="absolute inset-0 bg-black/50 rounded-md"></div>


  <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
    <h3 className="text-2xl font-semibold text-white">
      Selamat datang di City Light Indonesia
    </h3>
    <h5 className="text-lg text-white">
     Tempat pencucian mata
    </h5>
  </div>
</div>

          </div>
        )}

        <div className="text-lg text-gray-300 mt-6">{children}</div>
      </main>

     
      <footer className="bg-[#111827] text-gray-300 text-center py-4 text-sm">
        <p>
          Jl. Pakistan Serikat, Puntadewa <br />
          @padilxd_
        </p>
      </footer>
    </div>
  );
}
 
