import React from "react";
import Button from "@/components/button/button";
import Image from "next/image";

export default function SteamCleaning() {
  return (
    <div className="layout-container animation-scroll my-20 lg:my-32">
      <div className="relative overflow-hidden rounded-3xl lg:rounded-[3rem] bg-primary group shadow-level-3">
        {/* Background Image with MD3 Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
            alt="Limpieza a vapor baño"
            fill
            className="object-cover opacity-15 grayscale transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 p-8 sm:p-12 lg:p-20 items-center">
          <div>
            <div className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm border border-white/20">
              TRATAMIENTO DE CHOQUE
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-outfit font-bold text-white leading-[1.1] mb-8">
              Poder puro del <br />
              <span className="text-secondary italic font-light">vapor natural.</span>
            </h2>
            
            <p className="text-lg leading-relaxed mb-10 text-white/80 max-w-lg">
              Especialmente diseñado para <strong>baños y cocinas</strong>. Eliminamos el 99.9% de gérmenes y cal sin residuos químicos. Saludable para ti, letal para la suciedad.
            </p>
            
            <ul className="space-y-5 mb-12">
              {[
                "Desinfección biológica profunda",
                "Ideal para juntas, azulejos y campanas",
                "Certificado 100% libre de químicos"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white/90 group/item">
                  <span className="size-6 rounded-full bg-secondary/20 flex items-center justify-center mr-4 transition-colors group-hover/item:bg-secondary/40">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button link="https://wa.me/34678144504" variant="tonal" size="lg" className="bg-white/10 text-white hover:bg-white/20 border border-white/10">
                Reservar tratamiento
              </Button>
            </div>
          </div>
          
          {/* Side Card in MD3 style */}
          <div className="hidden lg:block">
            <div className="glass-card p-10 rounded-3xl shadow-level-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8">
                  <div className="size-16 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-2xl">🌱</span>
                  </div>
               </div>
               
               <h4 className="text-3xl font-outfit font-bold text-white mb-6">¿Por qué vapor?</h4>
               <p className="text-white/70 text-sm leading-relaxed mb-8">
                 El vapor a alta presión desincrusta la suciedad que los productos tradicionales no pueden alcanzar, sin dañar superficies delicadas y asegurando un ambiente libre de alérgenos.
               </p>
               
               <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[3rem] font-outfit font-bold text-white leading-none">100°C</p>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mt-2">Poder térmico natural</p>
                  </div>
                  <div className="bg-white text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest">
                     EFICACIA TOTAL
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
