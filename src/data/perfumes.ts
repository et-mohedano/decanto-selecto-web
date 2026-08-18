import { getCollection } from 'astro:content';

export type Tamano = { ml: 5 | 10; precio: number };
export type Ocasion = 'oficina' | 'citas' | 'amigos' | 'diario';
export type Clima = 'calurosos' | 'frescos' | 'cualquiera';

export interface Perfume {
  slug: string;
  nombre: string;
  marca: string;
  concentracion: 'EDT' | 'EDP' | 'Cologne' | 'Parfum';
  descripcionCorta: string;
  descripcionLarga: string;
  ocasiones: Ocasion[];
  clima: Clima;
  tamanos: Tamano[];
  imagen: string;
  destacado: boolean;
}

// Los perfumes viven como archivos markdown en src/content/perfumes/ (editables
// desde Pages CMS). Esta función los expone con la misma forma que antes tenía
// el array estático, para no tener que tocar cada página/componente que los usa.
export async function getPerfumes(): Promise<Perfume[]> {
  const entries = await getCollection('perfumes');
  return entries.map((entry) => ({
    slug: entry.id,
    descripcionLarga: entry.body?.trim() ?? '',
    ...entry.data,
  }));
}
