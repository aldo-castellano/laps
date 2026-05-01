"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { homeFaqs } from "@/lib/seo";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="layout-section bg-surface">
      <div className="layout-container animation-scroll">
        <header className="mb-10 max-w-2xl">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Dudas rápidas
          </h2>
          <h3 className="text-3xl sm:text-5xl font-outfit font-bold text-foreground leading-tight">
            Antes de pedir <span className="text-secondary italic font-light">presupuesto.</span>
          </h3>
        </header>

        <div className="flex flex-col gap-4">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="rounded-3xl bg-background p-6 shadow-level-1  "
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 text-left text-lg font-outfit font-bold text-foreground transition-colors hover:text-primary"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`text-primary transition-transform duration-300 ${
                      isOpen ? "-rotate-90" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon icon="mdi:chevron-left" className="text-2xl" />
                  </span>
                </button>

                {isOpen ? (
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
