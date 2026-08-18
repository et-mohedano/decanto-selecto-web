import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    keyword: z.string(),
    categoria: z.string(),
    fechaPublicacion: z.date(),
    minutosLectura: z.number().default(6),
    imagenPortada: z.string().optional(),
    proximamente: z.boolean().default(false),
  }),
});

const perfumes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/perfumes' }),
  schema: z.object({
    nombre: z.string(),
    marca: z.string(),
    concentracion: z.enum(['EDT', 'EDP', 'Cologne', 'Parfum']),
    descripcionCorta: z.string(),
    ocasiones: z.array(z.enum(['oficina', 'citas', 'amigos', 'diario'])),
    clima: z.enum(['calurosos', 'frescos', 'cualquiera']),
    tamanos: z.array(z.object({ ml: z.union([z.literal(5), z.literal(10)]), precio: z.number() })),
    imagen: z.string(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { blog, perfumes };
