export const SITE_NAME = 'Decanto Selecto';
// PENDIENTE: reemplazar por el dominio real una vez que se contrate el hosting/dominio.
export const SITE_URL = 'https://www.decantoselecto.com';
export const SITE_DESCRIPTION =
  'Microfragancias y decants de perfumes originales en 5 y 10 ml, en Pachuca de Soto, Hidalgo.';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pachuca de Soto',
      addressRegion: 'Hidalgo',
      addressCountry: 'MX',
    },
    priceRange: '$30 - $400 MXN',
    sameAs: ['https://www.instagram.com/DecantoSelecto'],
  };
}

export function productJsonLd(opts: {
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
  ml: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${opts.nombre} - ${opts.marca} (decant ${opts.ml} ml)`,
    brand: { '@type': 'Brand', name: opts.marca },
    description: opts.descripcion,
    offers: {
      '@type': 'Offer',
      price: String(opts.precio),
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: SITE_NAME },
    },
  };
}

export function articleJsonLd(opts: {
  titulo: string;
  descripcion: string;
  fechaPublicacion: Date;
  slug: string;
  imagen?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.titulo,
    description: opts.descripcion,
    datePublished: opts.fechaPublicacion.toISOString(),
    image: opts.imagen ? `${SITE_URL}${opts.imagen}` : `${SITE_URL}/images/marca/logo-og.png`,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${opts.slug}`,
  };
}

// Genera el <title> de una ficha de producto probando plantillas de la más completa
// a la más corta hasta que una quepa en 50-60 caracteres (nombres de marca muy largos
// no caben en la plantilla completa del ejemplo de la guía SEO).
export function buildProductTitle(nombre: string, marca: string): string {
  const candidates = [
    `Decant ${nombre} ${marca} 5 y 10 ml | Decanto Selecto`,
    `Decant ${nombre} ${marca} | Decanto Selecto`,
    `${nombre} ${marca} en decant | Decanto Selecto`,
    `${nombre} ${marca} | Decanto Selecto`,
  ];
  return candidates.find((c) => c.length <= 60) ?? candidates[candidates.length - 1];
}

// Genera la meta descripción de una ficha de producto probando distintos cierres
// hasta que el resultado caiga en 140-155 caracteres.
export function buildProductDescription(
  nombre: string,
  marca: string,
  descripcionCorta: string,
  precio5: number,
): string {
  const corta = descripcionCorta.charAt(0).toLowerCase() + descripcionCorta.slice(1);
  const base = `Prueba ${nombre} de ${marca} en decant de 5 o 10 ml. Perfume original, ${corta}.`;
  const cierres = [
    ` Pide por WhatsApp, con entrega en Pachuca desde $${precio5}.`,
    ` Entrega en Pachuca desde $${precio5}, pide por WhatsApp.`,
    ` Entrega en Pachuca desde $${precio5}.`,
    ` Desde $${precio5}, con entrega a domicilio en Pachuca.`,
  ];
  const candidatos = cierres.map((c) => base + c);
  const enRango = candidatos.find((c) => c.length >= 140 && c.length <= 155);
  if (enRango) return enRango;

  const dentroDelMax = candidatos.filter((c) => c.length <= 155);
  if (dentroDelMax.length > 0) {
    return dentroDelMax.reduce((mejor, actual) =>
      Math.abs(actual.length - 147) < Math.abs(mejor.length - 147) ? actual : mejor,
    );
  }
  return candidatos[candidatos.length - 1];
}

export function faqJsonLd(items: { pregunta: string; respuesta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.respuesta,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
