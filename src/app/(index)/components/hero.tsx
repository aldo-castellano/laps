"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/button";
import { whatsappUrl } from "@/lib/seo";

export default function Hero() {
  return (
    
    <section className="-mt-24 relative w-full overflow-hidden bg-white" >
      <div style={{ minHeight: "750px", clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%) " }} className="pt-10 relative w-full overflow-hidden bg-primary">
      
      <Image
        src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop"
        alt="Limpieza profesional para oficinas y locales en Barcelona"
        priority
        fill
        className="object-cover z-[-2]  opacity-20 "
        sizes="100vw"
      />
      
      {/* Dynamic Overlay - Subtle Japandi Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

      <div className="h-full pt-32 pb-20 min-h-[750px] flex flex-col relative z-20">
        {/* Hero Content */}
        <div className="layout-container flex-grow flex items-center justify-center lg:justify-start">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-8 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Limpieza profesional en Barcelona
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-outfit font-bold text-white leading-[1.05] tracking-tight mb-8">
              Limpieza profesional en Barcelona para espacios que <br />
              <span className="text-accent italic font-light">respiran</span> calma.
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 font-normal leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
              Limpieza profesional en Barcelona para espacios de trabajo que necesitan verse impecables. Productos responsables, atención al detalle y presupuestos claros por WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button link={whatsappUrl} variant="accent" size="lg" className="px-10">
                Solicitar presupuesto
              </Button>
              <Link href="#servicios" className="text-white/90 font-semibold text-sm hover:text-yellow-400 transition-colors hover:underline underline-offset-4">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </div></div>
    </section>
  );
}
