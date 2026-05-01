import React from "react";
import Image from "next/image";
import Link from "next/link";
import { displayPhone, email, whatsappUrl } from "@/lib/seo";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white/90 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <span className="block font-outfit text-4xl text-white font-bold tracking-tighter">
                LAPS<span className="text-white">.</span>
              </span>
              <p className="font-inter text-[10px] tracking-[0.2em] font-medium opacity-50 uppercase">LIMPIEZA & AMBIENTE</p>
            </Link>
            <p className="text-white/60 max-w-md text-lg leading-relaxed mb-8">
              Redefiniendo los estándares de limpieza en Barcelona a través de la sostenibilidad y el cuidado consciente.
            </p>
            <div className="flex gap-4">
               {/* Minimal Social Icons if needed */}
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-xs">IG</span>
               </div>
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-xs">LI</span>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-bold text-white uppercase tracking-widest text-xs mb-8">Navegación</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              
              <li><Link href="#contacto" className="hover:text-primary transition-colors">Presupuesto</Link></li>
              <li><Link href="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-bold text-white uppercase tracking-widest text-xs mb-8">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold mb-1">WhatsApp</span>
                <Link href={whatsappUrl} className="text-lg hover:text-primary transition-colors">{displayPhone}</Link>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold mb-1">Email</span>
                <Link href={`mailto:${email}`} className="text-lg text-white/80">{email}</Link>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold mb-1">Localización</span>
                <span className="text-sm text-white/60">Barcelona, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Map Teaser */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-white/30">
           <p>© 2026 LAPS CLEANING SERVICES. TODOS LOS DERECHOS RESERVADOS.</p>
           <div className="flex gap-8">
              <span>Hecho con ❤️ en BCN por Aldo Castellano</span>
           </div>
        </div>
      </div>
      
      {/* Visual background element - Minimalist map abstract */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             <rect x="10" y="10" width="80" height="2"/>
             <rect x="10" y="20" width="60" height="2"/>
             <rect x="40" y="30" width="50" height="2"/>
             <rect x="20" y="50" width="70" height="2"/>
             <rect x="10" y="70" width="40" height="2"/>
          </svg>
      </div>
    </footer>
  );
}
