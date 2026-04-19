"use client";
import React from "react";
import imgSweek from "@/../public/logos/sweeek-logo-es (1) 1.svg";
import imgPopcarte from "@/../public/logos/Popcarte.svg";
import Image from "next/image";

const REVIEWS = [
  {
    logo: imgSweek,
    alt: "logo sweek",
    text: "En Sweek, agradecemos a Lapservice por su colaboración excepcional. Su enfoque en la limpieza de calidad con productos ecológicos ha enriquecido nuestra oferta. Una asociación valiosa.",
    author: "Sweeek Business Team"
  },
  {
    logo: imgPopcarte,
    alt: "logo popcarte",
    text: "Su enfoque en la limpieza de calidad y el uso de productos ecológicos ha mejorado significativamente nuestros servicios. Lapservice supera nuestras expectativas con resultados sostenibles.",
    author: "Popcarte Spain"
  }
];

export default function Testimonials() {
  return (
    <section className="layout-section bg-background">
      <div className="layout-container animation-scroll relative z-10">
        <div className="bg-surface rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-level-1 border border-border">
          <header className="mb-12 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">NUESTROS CLIENTES</h3>
              <h4 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground tracking-tight">
                Testimonios de <span className="text-secondary italic font-light">confianza.</span>
              </h4>
            </div>
            <p className="max-w-xs text-foreground/50 text-xs font-medium uppercase tracking-widest leading-relaxed">
               Empresas en Barcelona que ya respiran la tranquilidad LAPS.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {REVIEWS.map((review, i) => (
              <div key={i} className="flex flex-col h-full group">
                <div className="bg-surface-variant/30 rounded-[2rem] p-8 lg:p-10 flex-grow border border-transparent transition-all duration-300 hover:shadow-level-2 hover:border-primary/10">
                  <div className="h-12 mb-8 flex items-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                     <Image 
                      alt={review.alt} 
                      src={review.logo} 
                      className="h-full w-auto object-contain max-w-[140px]" 
                    />
                  </div>
                  
                  <article className="text-foreground/80 text-base italic leading-relaxed mb-8 font-inter">
                    &quot;{review.text}&quot;
                  </article>
                  
                  <div className="flex items-center gap-4">
                     <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                         {review.author[0]}
                     </div>
                     <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wider">{review.author}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Cliente Verificado</p>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
