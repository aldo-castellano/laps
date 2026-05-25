export const siteUrl = "https://www.lapservice.es";
export const businessName = "LAPS";
export const phone = "+34678144504";
export const displayPhone = "+34 678 144 504";
export const email = "empresas@lapservice.es";
export const whatsappUrl =
  "https://wa.me/34678144504?text=Hola%20LAPS%2C%20quiero%20un%20presupuesto%20de%20limpieza%20profesional%20en%20Barcelona";

export function serviceWhatsappUrl(message: string) {
  return `https://wa.me/34678144504?text=${encodeURIComponent(message)}`;
}

export const servicePages = [
  {
    slug: "limpieza-oficinas-despachos-barcelona",
    name: "Limpieza de oficinas y despachos",
    title: "Limpieza de oficinas y despachos en Barcelona | LAPS",
    description:
      "Limpieza profesional de oficinas, despachos, estudios y espacios de trabajo en Barcelona. Servicio recurrente o puntual con presupuesto por WhatsApp.",
    h1: "Limpieza de oficinas y despachos en Barcelona",
    kicker: "Oficinas, despachos y espacios de trabajo",
    intro:
      "Un servicio pensado para espacios profesionales que necesitan orden, presencia y continuidad sin perder una estetica cuidada.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Oficina limpia y luminosa preparada para trabajar en Barcelona",
    whatsappMessage:
      "Hola, quiero pedir presupuesto para limpieza de oficinas/despachos en Barcelona.",
    benefits: [
      "Rutinas de limpieza adaptadas a horarios de oficina.",
      "Cuidado de mesas, salas, recepcion, banos y zonas comunes.",
      "Servicio recurrente para equipos que necesitan continuidad.",
      "Productos responsables como diferencial de bienestar e imagen.",
    ],
    includes: [
      "Limpieza de superficies de trabajo y mobiliario.",
      "Banos, office, accesos y salas de reuniones.",
      "Suelos, papeleras y puntos de contacto.",
      "Refuerzos puntuales cuando el espacio lo necesita.",
    ],
    audience: [
      "Oficinas pequenas y medianas",
      "Despachos profesionales",
      "Agencias, estudios y consultorias",
      "Consultas y espacios de atencion",
    ],
    process: [
      "Nos explicas el espacio y la frecuencia que necesitas.",
      "Preparamos una propuesta clara y ajustada.",
      "Coordinamos horarios para limpiar sin interrumpir.",
    ],
    faqs: [
      {
        question: "Ofreceis limpieza recurrente de oficinas?",
        answer:
          "Si. Podemos organizar limpiezas semanales, varias veces por semana o con la frecuencia que necesite el espacio.",
      },
      {
        question: "Podeis trabajar fuera del horario laboral?",
        answer:
          "Si. Coordinamos horarios para reducir interrupciones en la actividad diaria de la oficina o despacho.",
      },
      {
        question: "El presupuesto se adapta al tamano del espacio?",
        answer:
          "Si. Tenemos en cuenta metros, uso del espacio, frecuencia, horario y zonas prioritarias.",
      },
    ],
  },
  {
    slug: "limpieza-locales-comerciales-barcelona",
    name: "Limpieza de locales comerciales",
    title: "Limpieza de locales comerciales en Barcelona | LAPS",
    description:
      "Limpieza profesional de locales comerciales, tiendas, showrooms y espacios de atencion al publico en Barcelona. Solicita presupuesto.",
    h1: "Limpieza de locales comerciales en Barcelona",
    kicker: "Tiendas, showrooms y espacios de atencion",
    intro:
      "Cuidamos la primera impresion de tu local con una limpieza profesional pensada para espacios que reciben clientes.",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Local comercial limpio y cuidado para atencion al publico",
    whatsappMessage:
      "Hola, quiero pedir presupuesto para limpieza de locales comerciales en Barcelona.",
    benefits: [
      "Limpieza orientada a imagen, escaparate interior y experiencia del cliente.",
      "Horarios compatibles con apertura, cierre o baja afluencia.",
      "Atencion a suelos, mostrador, probadores, banos y zonas visibles.",
      "Servicio puntual o recurrente segun ritmo comercial.",
    ],
    includes: [
      "Suelos, superficies, mostrador y zonas de paso.",
      "Banos, almacen ligero y zonas de personal.",
      "Refuerzo de puntos de contacto y areas de alta rotacion.",
      "Puesta a punto antes de campanas, eventos o reaperturas.",
    ],
    audience: [
      "Tiendas y pequenos comercios",
      "Showrooms y estudios abiertos al publico",
      "Academias y centros de formacion",
      "Locales con atencion directa a clientes",
    ],
    process: [
      "Revisamos horarios y prioridades del local.",
      "Definimos frecuencia, zonas y nivel de detalle.",
      "Coordinamos el servicio para no afectar a ventas ni clientes.",
    ],
    faqs: [
      {
        question: "Podeis limpiar el local antes de abrir o al cerrar?",
        answer:
          "Si. Adaptamos el servicio a horarios de apertura, cierre o franjas de menor actividad.",
      },
      {
        question: "Haceis limpiezas puntuales para campanas o eventos?",
        answer:
          "Si. Podemos preparar el local antes de una campana, una reapertura, una visita importante o un evento.",
      },
      {
        question: "Trabajais con comercios pequenos?",
        answer:
          "Si. Ajustamos frecuencia y alcance para que el servicio tenga sentido para cada tipo de local.",
      },
    ],
  },
  {
    slug: "limpieza-puntual-profunda-barcelona",
    name: "Limpieza puntual y profunda",
    title: "Limpieza puntual y profunda en Barcelona | LAPS",
    description:
      "Limpieza puntual, limpieza profunda y limpieza a vapor en Barcelona para banos, cocinas, juntas, azulejos, grasa, cal y zonas criticas.",
    h1: "Limpieza puntual y profunda en Barcelona",
    kicker: "Vapor, banos, cocinas y zonas criticas",
    intro:
      "Un servicio de refuerzo para recuperar zonas dificiles, preparar un espacio o complementar una limpieza recurrente.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Limpieza profunda a vapor en bano y cocina",
    whatsappMessage:
      "Hola, quiero pedir presupuesto para limpieza puntual/profunda en Barcelona.",
    benefits: [
      "Ideal para banos, cocinas, juntas, azulejos, grasa y cal.",
      "Limpieza a vapor como refuerzo para zonas de uso intensivo.",
      "Servicio puntual sin necesidad de contratar mantenimiento continuo.",
      "Productos responsables y tecnicas cuidadas segun superficie.",
    ],
    includes: [
      "Tratamiento de zonas criticas y rincones dificiles.",
      "Limpieza de juntas, azulejos, banos y cocinas.",
      "Refuerzo con vapor cuando el espacio lo requiere.",
      "Puesta a punto tras obras ligeras, eventos o uso intensivo.",
    ],
    audience: [
      "Oficinas que necesitan una puesta a punto",
      "Locales antes de apertura o campana",
      "Espacios con banos o cocinas exigentes",
      "Empresas con necesidades puntuales",
    ],
    process: [
      "Nos cuentas que zona necesita refuerzo.",
      "Valoramos superficie, suciedad y tecnica adecuada.",
      "Coordinamos una intervencion puntual y clara.",
    ],
    faqs: [
      {
        question: "La limpieza a vapor sirve para banos y cocinas?",
        answer:
          "Si. Es especialmente util en juntas, azulejos, grasa, cal y zonas donde una limpieza superficial no basta.",
      },
      {
        question: "Se puede contratar una limpieza profunda puntual?",
        answer:
          "Si. Puedes contratarla como servicio independiente o como refuerzo de un mantenimiento recurrente.",
      },
      {
        question: "Necesitais ver el espacio antes de presupuestar?",
        answer:
          "Depende del caso. Muchas veces basta con fotos, metros aproximados y una descripcion clara de las zonas a tratar.",
      },
    ],
  },
] as const;

export type ServicePage = (typeof servicePages)[number];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export const homeFaqs = [
  {
    question: "Trabajais con oficinas, despachos y locales en Barcelona?",
    answer:
      "Si. LAPS trabaja con oficinas, despachos, coworkings y locales comerciales que necesitan un servicio de limpieza profesional, puntual o recurrente.",
  },
  {
    question: "Puedo pedir un presupuesto de limpieza por WhatsApp?",
    answer:
      "Si. Escribenos con el tipo de espacio, metros aproximados, zona, frecuencia y horario preferido. Te responderemos con una propuesta clara.",
  },
  {
    question: "Ofreceis limpieza recurrente para empresas?",
    answer:
      "Si. Podemos organizar limpiezas semanales, varias veces por semana o segun la actividad del espacio, siempre con un plan ajustado a tus prioridades.",
  },
  {
    question: "La limpieza a vapor se puede contratar como servicio puntual?",
    answer:
      "Si. Es una buena opcion para banos, cocinas, juntas, azulejos y zonas con grasa o cal que necesitan una limpieza profunda de refuerzo.",
  },
  {
    question: "Usais productos responsables o sostenibles?",
    answer:
      "Si. Priorizamos productos responsables y tecnicas cuidadas cuando encajan con el espacio, como un diferencial de salud, imagen y bienestar.",
  },
];

export const serviceNames = servicePages.map((service) => service.name);

export const localBusinessSchema = {
  "@type": ["LocalBusiness", "CleaningService"],
  "@id": `${siteUrl}/#localbusiness`,
  name: businessName,
  url: siteUrl,
  telephone: phone,
  email,
  image: `${siteUrl}/image/img-header.webp`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  areaServed: {
    "@type": "City",
    name: "Barcelona",
  },
  makesOffer: servicePages.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      url: `${siteUrl}/servicios/${service.slug}`,
      areaServed: {
        "@type": "City",
        name: "Barcelona",
      },
    },
  })),
};

export function faqSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(service: ServicePage) {
  return {
    "@type": "Service",
    "@id": `${siteUrl}/servicios/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${siteUrl}/servicios/${service.slug}`,
    provider: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
  };
}

export function graphSchema(items: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}

export const homeJsonLd = graphSchema([
  localBusinessSchema,
  ...servicePages.map(serviceSchema),
  faqSchema(homeFaqs),
  breadcrumbSchema([{ name: "Inicio", url: siteUrl }]),
]);
