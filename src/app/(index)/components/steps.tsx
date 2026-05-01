"use client";
import React from "react";
import { Icon } from "@iconify/react";

const STEPS = [
  {
    id: 1,
    title: "Contacto inicial",
    description: "Inicia tu experiencia enviándonos un mensaje por WhatsApp. Danos detalles básicos para personalizar tu servicio.",
    icon: "ph:chat-teardrop-dots-fill",
    color: "#eb8e02"
  },
  {
    id: 2,
    title: "Propuesta de valor",
    description: "En menos de 48 horas recibirás una respuesta detallada con el presupuesto y el plan de acción sostenible adaptado.",
    icon: "ph:envelope-simple-open-fill",
    color: "#76a2e4"
  },
  {
    id: 3,
    title: "Limpieza premium",
    description: "Nuestro equipo experto se encarga de todo usando productos certificados que solo dejan brillo natural.",
    icon: "mdi:spray-bottle",
    color: "#3a5a40"
  }
];

export default function Steps() {
  return (
    <section id="servicios" className="layout-section bg-surface">
      <div className="layout-container">
        <header className="mb-16 lg:mb-24 text-center">
           <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">FLUJO DE TRABAJO</h2>
           <h3 className="text-4xl sm:text-6xl font-outfit font-bold text-foreground leading-tight">
              Sencillez en tres <br />
              <span className="text-secondary italic font-light">pasos naturales</span>
           </h3>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[40%] left-0 right-0 h-px bg-muted z-0 scale-x-75"></div>

          {STEPS.map((step) => (
            <div 
              key={step.id} 
              className="animation-scroll relative z-10 group"
            >
              <div className="bg-background rounded-3xl p-10 h-full shadow-level-1 border border-transparent transition-all duration-300 hover:shadow-level-2 hover:border-primary/10 hover:-translate-y-1">
                <div 
                  className="size-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}15`, color: step.color }}
                >
                  <Icon icon={step.icon} className="text-3xl" />
                </div>
                
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Paso {step.id}</p>
                <h4 className="text-2xl font-outfit font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {step.description}
                </p>
                
                {/* Ghost number in MD3 style (subtle) */}
                <div className="absolute top-6 right-10 text-8xl font-outfit font-bold text-foreground/[0.03] pointer-events-none select-none">
                  0{step.id}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
