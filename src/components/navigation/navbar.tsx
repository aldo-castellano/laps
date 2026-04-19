"use client";

import Link from "next/link";
import React from "react";
import Button from "@/components/button/button";

export default function Navbar() {
  return (
    <nav className="sticky top-6 z-[5000] w-full pointer-events-none">
      <div className="layout-container pointer-events-auto">
        <div className="glass-card rounded-full px-6 py-3 flex justify-between items-center shadow-level-1 backdrop-blur-md">
          <Link href="/" className="group flex items-center gap-2">
            <h1 className="font-outfit text-2xl sm:text-3xl text-primary font-bold tracking-tighter transition-colors group-hover:text-primary/80">
              LAPS<span className="font-light text-foreground/60">.</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link>
            <Button link="https://wa.me/34678144504" variant="filled" className="h-9 px-5">
              Presupuesto
            </Button>
          </div>

          <div className="md:hidden">
            <Link href="https://wa.me/34678144504" className="text-xs font-bold text-primary underline underline-offset-4 decoration-2">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
