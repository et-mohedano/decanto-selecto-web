import type { Ocasion } from './perfumes';

export interface CategoriaInfo {
  slug: string;
  ocasion: Ocasion;
  titulo: string;
}

export const categorias: CategoriaInfo[] = [
  { slug: 'para-la-oficina', ocasion: 'oficina', titulo: 'Perfumes para la oficina' },
  { slug: 'para-citas', ocasion: 'citas', titulo: 'Perfumes para citas y fiestas' },
  { slug: 'para-amigos', ocasion: 'amigos', titulo: 'Perfumes para salir con amigos' },
  { slug: 'diario', ocasion: 'diario', titulo: 'Perfumes de uso diario' },
];

export function categoriaDeOcasion(ocasion: Ocasion): CategoriaInfo {
  return categorias.find((c) => c.ocasion === ocasion) ?? categorias[0];
}
