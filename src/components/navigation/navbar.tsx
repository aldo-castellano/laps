"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/button/button";
import { servicePages, whatsappUrl } from "@/lib/seo";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-6 z-5000 w-full pointer-events-none">
      <nav className="layout-container pointer-events-auto relative" >

        <div className="glass-card rounded-full px-6 py-3 flex justify-between items-center shadow-level-1 backdrop-blur-md">
          <Link href="/" className="group flex items-center gap-2" aria-label="LAPS inicio">
            <span className="font-outfit text-2xl sm:text-3xl text-primary font-bold tracking-tighter transition-colors group-hover:text-primary/80">
              LAPS<span className="font-light text-foreground/60">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-foreground/80">

            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="hover:text-primary transition-colors"
              >
                {service.name.replace("Limpieza de ", "").replace("Limpieza ", "")}
              </Link>
            ))}
            <Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link>
            <Button link={whatsappUrl} variant="filled" className="h-9 px-5">
              Presupuesto
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              aria-label={isOpen ? "Cerrar menÃº" : "Abrir menÃº"}
              aria-expanded={isOpen}
              className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-colors hover:bg-primary hover:text-white"
              onClick={() => setIsOpen((current) => !current)}
            >
              <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="lg:hidden absolute left-4 right-4 top-[calc(100%+0.75rem)] glass-card rounded-3xl p-5 shadow-level-2 backdrop-blur-md border border-white/20">
            <div className="flex flex-col gap-2 text-sm font-bold text-foreground/80">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="rounded-2xl px-4 py-3 hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/#contacto"
                className="rounded-2xl px-4 py-3 hover:bg-primary/10 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href={whatsappUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white transition-colors hover:brightness-110"
                onClick={() => setIsOpen(false)}
              >
                Pedir presupuesto
              </Link>
            </div>
          </div>
        ) : null}

      </nav>
    </header>
  );
}
