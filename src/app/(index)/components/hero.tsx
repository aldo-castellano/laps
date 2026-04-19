"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/button";

export default function Hero() {
  return (
    <section className="-mt-24 relative w-full overflow-hidden bg-background" style={{ minHeight: "750px", clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}>
      <Image
        src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop"
        alt="LAPS Limpieza Ecológica"
        priority
        fill
        className="object-cover z-[-2] brightness-95"
        sizes="100vw"
      />
      
      {/* Dynamic Overlay - Subtle Japandi Gradient */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-tr from-primary/30 to-transparent"></div>

      <div className="h-full pt-32 pb-20 min-h-[750px] flex flex-col relative z-20">
        {/* Hero Content */}
        <div className="layout-container flex-grow flex items-center justify-center lg:justify-start">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Sostenibilidad en cada detalle
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-outfit font-bold text-foreground leading-[1.05] tracking-tight mb-8">
              Espacios que <br />
              <span className="text-primary italic font-light">respiran</span> calma.
            </h2>
            
            <p className="text-lg sm:text-xl text-foreground/80 font-normal leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
              Transformamos la limpieza en una experiencia de bienestar. Utilizamos productos <strong>100% ecológicos</strong> para cuidar de tu salud y del planeta.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button link="https://wa.me/34678144504" variant="accent" size="lg" className="px-10">
                Solicitar presupuesto
              </Button>
              <Link href="#servicios" className="text-foreground/60 font-semibold text-sm hover:text-primary transition-colors hover:underline underline-offset-4">
                Descubrir más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
