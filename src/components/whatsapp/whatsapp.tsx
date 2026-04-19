import React from "react";
import Link from "next/link";
import Image from "next/image";
import whatsappImg from "@/../public/icons/whatsapp.svg";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip / Label */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-foreground text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-japandi">
         HABLA CON NOSOTROS
      </div>
      
      <Link 
        href="https://wa.me/34678144504" 
        target="_blank" 
        className="relative block w-14 h-14 bg-[#25D366] rounded-2xl shadow-lg border-2 border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:shadow-2xl flex items-center justify-center p-3.5"
      >
        <Image 
          src={whatsappImg} 
          alt="WhatsApp LAPS" 
          width={40} 
          height={40} 
          className="transition-transform group-hover:rotate-12"
        />
      </Link>
    </div>
  );
}
