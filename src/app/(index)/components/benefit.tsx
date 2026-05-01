"use client";
import React from "react";
import Button from "@/components/button/button";
import Image from "next/image";
import { whatsappUrl } from "@/lib/seo";

export default function Benefit() {
  return (
    <section className="animation-scroll relative bg-background overflow-hidden min-h-[500px] lg:min-h-[700px] flex items-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=800&w=2070&auto=format"
          alt="Productos responsables para limpieza profesional en Barcelona"
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
          <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">LIMPIEZA RESPONSABLE</h3>
          <h4 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground leading-tight mb-6">
            Oficinas y locales limpios <br />
            con <span className="text-primary italic font-light">criterio profesional.</span>
          </h4>

          <p className="text-foreground/80 text-lg leading-relaxed mb-10">
            En LAPS combinamos limpieza profesional en Barcelona con productos responsables y técnicas cuidadas.
            <span className="text-primary font-bold"> Ideal para oficinas, despachos y locales comerciales</span>
            que necesitan transmitir orden, confianza y bienestar sin renunciar a una limpieza más sostenible.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button link={whatsappUrl} variant="accent" size="lg">
              Pedir presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
