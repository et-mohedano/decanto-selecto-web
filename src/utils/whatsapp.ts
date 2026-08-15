// PENDIENTE: pedir el número real de WhatsApp al cliente y reemplazar aquí antes de publicar.
const TELEFONO = '5217713963787';

export function linkPedido(nombre: string, marca: string, conc: string, ml: number, precio: number): string {
  const texto = `Hola, me interesa el ${nombre} (${conc}) de ${marca} en ${ml} ml — $${precio}. ¿Está disponible?`;
  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(texto)}`;
}

export function linkConsulta(contexto?: string): string {
  const texto = contexto
    ? `Hola, tengo una duda sobre ${contexto}`
    : 'Hola, tengo una duda sobre los perfumes';
  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(texto)}`;
}

export function linkArticulo(tituloArticulo: string): string {
  const texto = `Hola, leí el artículo "${tituloArticulo}" y sigo sin decidirme. ¿Me ayudan a elegir?`;
  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(texto)}`;
}
