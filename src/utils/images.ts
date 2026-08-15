import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const productImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/productos/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

function resolveSource(filename: string): ImageMetadata {
  const entry = Object.entries(productImages).find(([path]) => path.endsWith(`/${filename}`));
  if (!entry) {
    throw new Error(`No se encontró la imagen de producto "${filename}" en src/assets/productos/`);
  }
  return entry[1].default;
}

// Genera un <img> optimizado en WebP a partir del nombre de archivo guardado en perfumes.ts.
export async function optimizedProductImage(filename: string, width: number) {
  const source = resolveSource(filename);
  return getImage({ src: source, width, height: width, format: 'webp' });
}
