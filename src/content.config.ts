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

export const collections = { blog };
