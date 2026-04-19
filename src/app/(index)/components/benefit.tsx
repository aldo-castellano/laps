"use client";
import React from "react";
import Button from "@/components/button/button";
import Image from "next/image";

export default function Benefit() {
  return (
    <section className="animation-scroll relative bg-background overflow-hidden min-h-[500px] lg:min-h-[700px] flex items-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=800&w=2070&auto=format"
          alt="Ingredientes naturales de limpieza"
          priority
          fill
          className="object-cover grayscale-[0.2] brightness-95"
          sizes="100vw"
        />
        {/* MD3-style semi-transparent overlay */}
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      <div className="layout-container relative z-10 py-24 sm:py-32">
        <div className="glass-card max-w-2xl p-8 sm:p-12 lg:p-16 rounded-3xl shadow-level-2">
          <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">COMPROMISO ECO</h3>
          <h4 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground leading-tight mb-6">
            Cuidamos tu hogar <br />
            como <span className="text-primary italic font-light">cuidamos la tierra.</span>
          </h4>

          <p className="text-foreground/80 text-lg leading-relaxed mb-10">
            En LAPS, la limpieza sostenible no es una opción, es nuestro ADN.
            <span className="text-primary font-bold"> Utilizamos productos 100% biodegradables</span>
            que protegen la salud de quienes habitan tus espacios y garantizan un futuro más verde para Barcelona.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button link="https://wa.me/34678144504" variant="accent" size="lg">
              Saber más sobre nuestra técnica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
