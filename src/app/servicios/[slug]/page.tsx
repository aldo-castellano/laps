import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/button/button";
import {
  breadcrumbSchema,
  getServicePage,
  graphSchema,
  localBusinessSchema,
  servicePages,
  serviceSchema,
  faqSchema,
  serviceWhatsappUrl,
  siteUrl,
} from "@/lib/seo";

type Props = {
  params: {
    slug: string;
  };
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServicePage(params.slug);

  if (!service) {
    return {};
  }

  const url = `/servicios/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${siteUrl}${url}`,
      siteName: "LAPS",
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServicePage(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicePages.filter((item) => item.slug !== service.slug);
  const whatsapp = serviceWhatsappUrl(service.whatsappMessage);

  return (
    <main>
      <JsonLd
        data={graphSchema([
          localBusinessSchema,
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Inicio", url: siteUrl },
            { name: "Servicios", url: `${siteUrl}/#servicios` },
            { name: service.name, url: `${siteUrl}/servicios/${service.slug}` },
          ]),
        ])}
      />

      <section className="-mt-24 relative w-full overflow-hidden bg-white" >
        <div style={{ minHeight: "750px", clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%) " }} className=" pt-10 relative w-full overflow-hidden bg-white">
      
        <Image
          src={service.image}
          alt={service.imageAlt}
          priority
          fill
          className="object-cover z-[-2] opacity-70 "
          sizes="100vw"
        />
         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

        <div className="layout-container min-h-[680px] pt-32 pb-20 flex items-center z-20 relative">
          <div className="max-w-3xl">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 border border-primary/20"
            >
              {service.kicker}
            </Link>
            <h1 className="text-5xl sm:text-7xl font-outfit font-bold text-foreground leading-[1.05] tracking-tight mb-8">
              {service.h1}
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 font-normal leading-relaxed mb-12 max-w-2xl">
              {service.intro}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button link={whatsapp} variant="accent" size="lg" className="px-10">
                Pedir presupuesto
              </Button>
              <Button link={whatsapp} variant="elevated" size="lg">
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="layout-section bg-surface">
        <div className="layout-container">
          <header className="mb-12 max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
              Beneficios
            </h2>
            <h3 className="text-4xl sm:text-5xl font-outfit font-bold text-foreground leading-tight">
              Limpieza pensada para <span className="text-secondary italic font-light">contratar sin fricción.</span>
            </h3>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit) => (
              <article
                key={benefit}
                className="bg-background rounded-3xl p-8 shadow-level-1 border border-transparent"
              >
                <p className="text-foreground/75 leading-relaxed">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-section bg-background">
        <div className="layout-container grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="glass-card p-8 sm:p-12 rounded-3xl shadow-level-2">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
              Qué incluye
            </h2>
            <ul className="space-y-5">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-4 text-foreground/78">
                  <span className="mt-2 size-2 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 sm:p-12 rounded-3xl shadow-level-2">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
              Para quién es
            </h2>
            <ul className="space-y-5">
              {service.audience.map((item) => (
                <li key={item} className="flex gap-4 text-foreground/78">
                  <span className="mt-2 size-2 rounded-full bg-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="layout-section bg-primary text-white">
        <div className="layout-container">
          <header className="mb-12 max-w-2xl">
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">
              Proceso
            </h2>
            <h3 className="text-4xl sm:text-5xl font-outfit font-bold leading-tight">
              De la consulta al servicio, sin complicarlo.
            </h3>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <article key={step} className="rounded-3xl bg-white/10 p-8 border border-white/10">
                <p className="text-xs font-bold text-white/45 uppercase tracking-widest mb-4">
                  Paso {index + 1}
                </p>
                <p className="text-white/85 leading-relaxed">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-section bg-surface">
        <div className="layout-container">
          <header className="mb-10 max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
              Dudas rápidas
            </h2>
            <h3 className="text-3xl sm:text-5xl font-outfit font-bold text-foreground leading-tight">
              Antes de pedir <span className="text-secondary italic font-light">presupuesto.</span>
            </h3>
          </header>

          <div className="flex flex-col gap-4">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl bg-background p-6 shadow-level-1 border border-border">
                <h4 className="text-lg font-outfit font-bold text-foreground">
                  {faq.question}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-section bg-background">
        <div className="layout-container">
          <div className="bg-surface rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-level-1 border border-border">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">
                  Servicios relacionados
                </h2>
                <h3 className="text-3xl sm:text-5xl font-outfit font-bold text-foreground">
                  Otros servicios de limpieza profesional.
                </h3>
              </div>
              <Button link={whatsapp} variant="filled">
                Solicitar limpieza
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicios/${item.slug}`}
                  className="rounded-3xl bg-background p-6 border border-border text-foreground transition-colors hover:text-primary"
                >
                  <p className="font-outfit text-xl font-bold">{item.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
