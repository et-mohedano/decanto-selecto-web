# Decanto Selecto — sitio web

Sitio web de Decanto Selecto, tienda de microfragancias (decants de perfumes originales en 5 y 10 ml) en Pachuca de Soto, Hidalgo.

Construido con [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) + TypeScript. Sin framework de UI adicional: los únicos scripts de cliente son los filtros del catálogo y el selector de tamaño de la ficha de producto, escritos en JavaScript/TypeScript vanilla dentro de los propios componentes Astro.

## Instalación

Requiere Node.js ≥ 22 y [pnpm](https://pnpm.io).

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Levanta el servidor de desarrollo en `http://localhost:4321`.

## Compilar para producción

```bash
pnpm build
```

Genera el sitio estático en `./dist/`. Antes de publicar, revisa que termine sin errores ni advertencias (puedes correr `pnpm astro check` para el tipado).

Para previsualizar el build de producción localmente:

```bash
pnpm preview
```

## Estructura del proyecto

```
src/
├── assets/
│   ├── logo.png            # Logotipo de marca
│   └── productos/          # Fotos de producto (se optimizan a WebP en el build)
├── components/
│   ├── layout/              # Header, Footer, WhatsAppFloat
│   ├── product/             # ProductCard, ProductGrid, SizeSelector, FilterBar
│   ├── blog/                 # ArticleCard, InlineProduct, ArticleHeader
│   └── ui/                   # Button, Badge, TrustStrip, SectionHeading
├── content/
│   ├── blog/                 # Artículos del blog (.md / .mdx)
│   └── perfumes/              # Un archivo .md por perfume (catálogo completo)
├── content.config.ts        # Esquema de las colecciones "blog" y "perfumes"
├── data/
│   ├── perfumes.ts           # getPerfumes(): lee la colección "perfumes" y expone los tipos
│   └── categorias.ts         # Las 4 categorías de ocasión (slug, título)
├── layouts/
│   ├── BaseLayout.astro       # <head>, SEO, Header/Footer/WhatsAppFloat
│   └── ArticleLayout.astro    # Envoltura de artículo de blog
├── pages/
│   ├── index.astro
│   ├── catalogo/index.astro y [categoria].astro
│   ├── perfume/[slug].astro
│   ├── blog/index.astro y [slug].astro
│   ├── que-es-un-decant.astro, nosotros.astro, contacto.astro, 404.astro
├── styles/global.css         # Tokens de diseño (Tailwind v4 @theme) y estilos base
└── utils/
    ├── whatsapp.ts            # Generadores de enlaces wa.me
    ├── seo.ts                 # Constructores de <title>/meta y JSON-LD
    └── images.ts              # Resolución de imágenes de producto vía astro:assets
```

## Administrar perfumes y blog desde Pages CMS

El catálogo (`src/content/perfumes/`) y el blog (`src/content/blog/`) se pueden editar sin tocar código desde [Pages CMS](https://pagescms.org), un CMS gratuito basado en Git que commitea directamente a GitHub. La configuración vive en `.pages.yml` en la raíz del repo. Ver la guía de instalación (GitHub App + login) que te dio Claude, o `pagescms.org/docs/guides/installing/github-app`.

Cada push (manual o desde el CMS) redepliega solo gracias a la integración Git de Cloudflare Workers.

### Cómo agregar un perfume nuevo al catálogo (manualmente, sin el CMS)

1. Copia la foto del frasco a `src/assets/productos/` (cualquier formato: jpg, png, webp o avif — se optimiza a WebP automáticamente en el build).
2. Crea un archivo nuevo en `src/content/perfumes/<slug>.md`, con frontmatter siguiendo el esquema de `src/content.config.ts` (`nombre`, `marca`, `concentracion`, `descripcionCorta`, `ocasiones`, `clima`, `tamanos`, `imagen`, `destacado`) y el cuerpo del archivo (fuera del frontmatter) como `descripcionLarga`: entre 150 y 300 palabras **originales** (nunca copiadas de la marca). Estructura sugerida: cómo huele, cuándo usarlo, qué incluye el decant.
   - El nombre del archivo (sin `.md`) es el `slug` de la página `/perfume/<slug>`. Usa `nombre-marca` en minúsculas, sin acentos, separado por guiones. Debe ser único.
   - `imagen`: el nombre exacto del archivo que copiaste en el paso 1.
   - `destacado`: `true` si quieres que aparezca en "Los más pedidos" del inicio.
3. Si el producto no tiene foto todavía, usa `imagen: sin-foto.png` (el marcador de posición ya incluido) y anota el pendiente en `PENDIENTES.md`.
4. Astro genera automáticamente la página `/perfume/[slug]`, la incluye en el catálogo y en las categorías donde corresponda por `ocasiones`. No hace falta tocar ninguna página.

### Cómo agregar un artículo al blog (manualmente, sin el CMS)

1. Crea un archivo nuevo en `src/content/blog/`. Usa `.md` si el artículo no necesita insertar tarjetas de producto, o `.mdx` si sí (como `mejores-perfumes-para-la-oficina.mdx`, que usa el componente `InlineProduct`).
2. El frontmatter debe cumplir el esquema de `src/content.config.ts`:
   ```yaml
   title: "Título del artículo (funciona como <title> si no defines metaTitle, y como H1)"
   metaTitle: "Opcional: versión corta de 50-60 caracteres para <title>, si el title es muy largo"
   description: "Meta descripción de 140-155 caracteres"
   keyword: "palabra clave objetivo"
   categoria: "Nombre de la categoría (se muestra como etiqueta)"
   fechaPublicacion: 2026-09-01
   minutosLectura: 7
   imagenPortada: "/images/blog/mi-articulo.webp"
   proximamente: false
   ```
3. Si el artículo todavía no está escrito pero ya quieres que aparezca en el calendario editorial, pon `proximamente: true` — aparecerá en `/blog` como tarjeta atenuada con la etiqueta "Próximamente" y sin enlace ni página propia.
4. Para insertar un producto dentro del cuerpo (solo en `.mdx`):
   ```mdx
   import InlineProduct from '../../components/blog/InlineProduct.astro';

   <InlineProduct slug="el-slug-del-perfume" />
   ```
5. Astro genera automáticamente `/blog/[slug]` para los artículos con `proximamente: false`.

## Cómo publicar el sitio

1. **Dominio real**: reemplaza `https://www.decantoselecto.com` (marcado como pendiente) en `astro.config.mjs` (propiedad `site`) y en `src/utils/seo.ts` (`SITE_URL`). Esto afecta el sitemap, las URLs canónicas y los datos estructurados.
2. **Número de WhatsApp real**: reemplaza la constante `TELEFONO` en `src/utils/whatsapp.ts`.
3. Corre `pnpm build` y sube el contenido de `dist/` a tu hosting (Netlify, Vercel, Cloudflare Pages o cualquier hosting estático funcionan igual de bien, ya que el sitio es 100% estático).
4. Envía `https://tudominio.com/sitemap-index.xml` a Google Search Console.
5. Configura el perfil de Google Business (ver la guía de SEO original para el checklist completo) — es la acción de mayor impacto para el SEO local, según el propio plan de medición.

## Pendientes conocidos

Revisa `CONFLICTOS_DE_DATOS.md` (precios que requieren tu confirmación) y `PENDIENTES.md` (número de WhatsApp, fotos faltantes, dirección de entrega, y otros datos que faltan por confirmar) antes de publicar.
