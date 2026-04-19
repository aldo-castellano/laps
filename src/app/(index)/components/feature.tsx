import React from "react";

const FEATURES = [
  {
    title: "Barcelona local",
    description: "Operamos exclusivamente en Barcelona para garantizar una respuesta ágil y personalizada. Conocemos tu ciudad.",
    iconColor: "oklch(38.27% 0.057 146.45)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  {
    title: "100% Ecológicos",
    description: "Nuestros productos son certificados, biodegradables y seguros para mascotas y niños. Limpiamos con conciencia.",
    iconColor: "oklch(72.5% 0.04 146.45)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z"/><path d="M12 22V12"/><path d="M20 7l-8 5-8-5"/>
      </svg>
    )
  },
  {
    title: "Servicio premium",
    description: "No solo limpiamos, transformamos ambientes. Nuestro estándar de excelencia garantiza satisfacción total.",
    iconColor: "oklch(68.61% 0.177 75.34)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      </svg>
    )
  }
];

export default function Feature() {
  return (
    <section className="layout-section bg-background overflow-hidden">
      <div className="layout-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-8">
           <div className="lg:w-2/3">
              <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">NUESTROS VALORES</h2>
              <h3 className="text-4xl sm:text-6xl font-outfit font-bold text-foreground leading-[1.1]">
                Más sobre <span className="text-primary italic font-light font-outfit">nosotros</span>
              </h3>
           </div>
           <p className="lg:w-1/3 text-foreground/60 text-sm leading-relaxed">
             En LAPS creemos que un espacio limpio es un espacio feliz. Nos esforzamos por ofrecer la máxima calidad con el mínimo impacto ambiental.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {FEATURES.map((feat, i) => (
            <div key={i} className="animation-scroll group">
               <div className="h-full p-0 flex flex-col transition-all duration-300">
                  <div className="mb-8 p-6 rounded-3xl bg-surface shadow-level-1 inline-block w-fit transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-level-2" style={{ color: feat.iconColor }}>
                    {feat.icon}
                  </div>
                  
                  <h4 className="text-2xl font-outfit font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feat.title}
                  </h4>
                  
                  <p className="text-foreground/60 leading-relaxed text-base">
                    {feat.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs tracking-widest opacity-0 transform translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 cursor-pointer">
                    SABER MÁS 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
