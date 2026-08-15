# Conflictos de datos — catálogo Decanto Selecto

Este archivo documenta cómo se resolvieron las discrepancias de precio entre las tres fuentes de datos de producto:

- **DOCX** — `Lista de Perfumes.docx` (24 perfumes, es la lista de precios más completa; no trae descripciones olfativas).
- **Catálogo 301025** — `Catálogos/Decanto Selecto - Catálogo 301025.pdf` (fechado 30/10/2025, la versión más reciente; 12 perfumes únicos repartidos en 4 secciones por ocasión).
- **Catálogo (sin fecha)** — `Catálogos/Decanto Selecto - Catálogo.pdf` (versión anterior del mismo catálogo visual; también 12 perfumes únicos, con 3 productos que ya no están en la versión 301025 y sin 3 que sí incorporó la versión 301025).

## Regla de resolución aplicada

**Para cada tamaño (5 ml y 10 ml) de forma independiente, se usó el precio más alto entre las fuentes en las que aparece ese producto.** Es decir, la comparación nunca elige "una fuente completa": puede tomar el 5 ml de una fuente y el 10 ml de otra si así resulta el máximo por tamaño.

Para **descripción olfativa, ocasión y clima**, se usó el Catálogo 301025 por ser la fuente más reciente. Cuando un producto no está en el 301025 pero sí en el catálogo sin fecha, se usó ese. Cuando un producto no aparece en ningún catálogo (solo en el DOCX), se redactó una descripción de tres palabras y se asignaron ocasión/clima con criterio editorial — estas filas están marcadas y requieren tu validación.

## Hallazgo relevante antes de la tabla

El catálogo **301025** (la fuente que se asumía tenía únicamente el rol de "descripciones", no de precios en disputa) en realidad **sí contiene un producto que el prompt original daba por hecho que estaba solo en el DOCX: Ombré Leather de Tom Ford**, con precio 5 ml $230 / 10 ml $400 — distinto al 5 ml $250 del DOCX. No es una contradicción que bloquee el trabajo: se resolvió con la misma regla (precio más alto por tamaño → 5 ml $250 / 10 ml $400), pero te lo señalo explícitamgame porque cambia el supuesto de partida. Verifica este precio en particular con el catálogo impreso/físico si tienes duda.

También encontré que el catálogo 301025 **reemplazó tres productos** que estaban en la versión sin fecha: **The One (Dolce & Gabbana)**, **L'Homme Ideal (Guerlain)** y **Halloween Man X (J. del Pozo)** ya no aparecen en el 301025, que en su lugar agrega **Armani Code**, **Ombré Leather** y una segunda variante EDT de **The Most Wanted Intense**. Interpreté esto como una actualización real del catálogo (no como error de lectura) e incluí los tres productos "descontinuados" en el sitio de todas formas, porque **sí están en el DOCX** (The One y L'Homme Ideal no están en el DOCX tampoco — ver nota debajo de la tabla) o el usuario los pidió explícitamente incluir.

## Tabla de precios por fuente y resolución

⚠️ = hubo conflicto de precio entre fuentes (se aplicó la regla del más alto por tamaño).

| Producto | Marca | DOCX 5ml/10ml | Catálogo 301025 5ml/10ml | Catálogo sin fecha 5ml/10ml | **Precio final 5ml/10ml** |
|---|---|---|---|---|---|
| ⚠️ Ombré Leather | Tom Ford | $250 / $400 | $230 / $400 | — | **$250 / $400** |
| Uomo Born in Roma Intense | Valentino | $250 / $400 | — | — | **$250 / $400** |
| Gentleman Society | Givenchy | $200 / $300 | — | — | **$200 / $300** |
| L'Homme Intense | Prada | $200 / $300 | — | — | **$200 / $300** |
| Allure Homme Sport Cologne | Chanel | $200 / $300 | — | — | **$200 / $300** |
| Acqua Di Gio Profondo | Giorgio Armani | $150 / $250 | — | — | **$150 / $250** |
| ⚠️ 212 VIP Black | Carolina Herrera | $150 / $250 | $130 / $200 | $130 / $200 | **$150 / $250** |
| Le Male Elixir | Jean Paul Gaultier | $130 / $200 | — | — | **$130 / $200** |
| The Most Wanted Intense (EDP) | Azzaro | $130 / $200 | $130 / $200 | $130 / $200 | **$130 / $200** |
| Dylan Blue | Versace | $130 / $200 | $130 / $200 | $130 / $200 | **$130 / $200** |
| Light Blue | Dolce & Gabbana | $130 / $200 | — | — | **$130 / $200** |
| Armani Code | Giorgio Armani | $130 / $200 | $130 / $200 | — | **$130 / $200** |
| ⚠️ The Most Wanted Intense (EDT) | Azzaro | $80 / $150 | $70 / $130 | — | **$80 / $150** |
| ⚠️ Pour Homme | Versace | $80 / $150 | $100 / $150 | $100 / $150 | **$100 / $150** |
| ⚠️ Vetiver | Guerlain | $80 / $150 | $70 / $130 | $70 / $130 | **$80 / $150** |
| ⚠️ Explorer Platinum | Montblanc | $80 / $150 | $70 / $130 | $70 / $130 | **$80 / $150** |
| ⚠️ Halloween Man X | J. del Pozo | $80 / $150 | — | $60 / $100 | **$80 / $150** |
| Halloween Man | J. del Pozo | $60 / $100 | $60 / $100 | $60 / $100 | **$60 / $100** |
| Presence | Montblanc | $60 / $100 | — | — | **$60 / $100** |
| Odissey Homme | Armaf | $60 / $100 | — | — | **$60 / $100** |
| Yara | Lattafa | $60 / $100 | — | — | **$60 / $100** |
| Oud for Glory | Lattafa | $50 / $80 | — | — | **$50 / $80** |
| Be | Calvin Klein | $30 / $50 | — | — | **$30 / $50** |
| Voyage | Nautica | $30 / $50 | $30 / $50 | $30 / $50 | **$30 / $50** |
| Impact Intense *(solo en catálogo)* | Tommy Hilfiger | — | $100 / $150 | $100 / $150 | **$100 / $150** |
| The One *(solo en catálogo)* | Dolce & Gabbana | — | — | $100 / $150 | **$100 / $150** |
| L'Homme Ideal *(solo en catálogo)* | Guerlain | — | — | $70 / $130 | **$70 / $130** |

**27 perfumes en total** en el catálogo del sitio: 24 de la lista de precios (DOCX) + 3 que solo aparecen en el catálogo PDF (Impact Intense, The One, L'Homme Ideal), tal como pediste incluir.

## Descripciones redactadas por mí (requieren tu validación)

Los siguientes productos no tienen descripción olfativa, ocasión ni clima en ningún catálogo (solo precio en el DOCX). Escribí la descripción de tres palabras y asigné ocasión/clima con criterio editorial, siguiendo el patrón de las descripciones existentes. **Marca esto como pendiente de validar**, no son datos de fuente:

- Uomo Born in Roma Intense — Valentino → "Dulce, especiado y envolvente" / citas, amigos / frescos
- Gentleman Society — Givenchy → "Dulce, amaderado y sofisticado" / citas, amigos / frescos
- L'Homme Intense — Prada → "Amaderado, elegante y suave" / oficina, citas / frescos
- Allure Homme Sport Cologne — Chanel → "Cítrico, fresco y deportivo" / diario, oficina / calurosos
- Acqua Di Gio Profondo — Giorgio Armani → "Marino, fresco y profundo" / oficina, diario / cualquiera
- Le Male Elixir — Jean Paul Gaultier → "Dulce, vainilla y magnético" / citas, amigos / frescos
- Light Blue — Dolce & Gabbana → "Ligero, cítrico y veraniego" / diario, oficina / calurosos
- Presence — Montblanc → "Amaderado, especiado y clásico" / oficina, diario / frescos
- Odissey Homme — Armaf → "Fresco, aromático y versátil" / diario, oficina / cualquiera
- Yara — Lattafa → "Dulce, afrutado y gourmand" / citas, diario / cualquiera
- Oud for Glory — Lattafa → "Amaderado, ahumado e intenso" / citas, amigos / frescos
- Be — Calvin Klein → "Limpio, ligero y versátil" / diario, oficina / cualquiera

Además, la concentración (EDT/EDP/Parfum/Cologne) de varios productos no venía indicada en ninguna fuente; se asignó con base en la concentración real de mercado de cada fragancia (dato público de cada marca, no un precio ni un dato en disputa): Ombré Leather (EDP), Uomo Born in Roma Intense (EDP), Le Male Elixir (Parfum), Halloween Man X (EDP), Presence (EDT), Odissey Homme (EDP), Yara (EDP), Oud for Glory (EDP), Be (EDT).

## Pendiente de tu confirmación

Antes de publicar el sitio, por favor confirma:

1. Los precios finales de la tabla de arriba, en especial las 7 filas marcadas con ⚠️.
2. El precio de Ombré Leather ($250/$400) dado el hallazgo de la sección anterior.
3. Las 12 descripciones redactadas por criterio editorial (sección anterior) — especialmente si Yara y Oud for Glory (Lattafa) deben seguir en el catálogo de perfumes de hombre o si son línea aparte.
