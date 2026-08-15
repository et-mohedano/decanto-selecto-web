# Pendientes — Decanto Selecto

Lista viva de todo lo que necesito que confirmes o me proporciones antes de publicar el sitio. Se va actualizando conforme avanza la construcción.

## Del catálogo de datos (fase 1)

1. **Confirmar los precios finales** — ver `CONFLICTOS_DE_DATOS.md` para la tabla completa. En especial las 7 filas marcadas con ⚠️ y el caso de Ombré Leather (ver el hallazgo explicado en ese archivo).
2. **Confirmar las 12 descripciones/ocasión/clima redactadas por criterio editorial** (no vienen de ninguna fuente) — listadas en `CONFLICTOS_DE_DATOS.md`.
3. **Fotos de producto faltantes** — la carpeta `Fotos perfumes/` no trae imagen para 4 de los 27 perfumes del catálogo final:
   - L'Homme Intense — Prada (no está numerada en la carpeta de fotos; falta el archivo "4.")
   - Impact Intense — Tommy Hilfiger (solo aparece en los catálogos PDF, no en la lista numerada de fotos)
   - The One — Dolce & Gabbana (ídem)
   - L'Homme Ideal — Guerlain (ídem)

   Mientras no tenga la foto real, el sitio usa un marcador de posición generado (`sin-foto.png`, monograma DS) en vez de la imagen del frasco.
4. **¿Yara y Oud for Glory (Lattafa) siguen siendo parte del catálogo de perfumería masculina?** Yara en particular es una fragancia que Lattafa comercializa para mujer; la incluí porque estaba en la lista de precios, pero vale la pena confirmar que sigue vigente en el catálogo.

## Del sitio (pendiente conforme avance la construcción)

5. **Número real de WhatsApp** — el código usa `52771XXXXXXX` como marcador de posición (ver `src/utils/whatsapp.ts` una vez creado). Debe reemplazarse antes de publicar.
6. **Dirección o zona exacta de entrega en Pachuca** — el documento de arquitectura menciona "mapa embebido si hay punto de entrega fijo"; necesito la zona/colonia exacta o confirmar que la entrega es solo a domicilio sin punto fijo.
7. **Logotipo en una sola versión** — `Decanto Selecto.png` es un cuadrado de 2160×2160 con fondo oscuro sólido ya incluido en la imagen (no es un archivo transparente ni hay una versión separada para fondo claro, aunque el manual de identidad menciona que debería existir). Lo estoy usando tal cual en header, footer y hero (todos sobre fondo oscuro). Si necesitas el logo sobre fondo claro (ej. en un PDF o documento con fondo blanco) vas a necesitar que te generen esa versión aparte — en el sitio no se usa ese caso porque el diseño está construido sobre la paleta 70% oscuro.
8. **Criterio oficial de asignación de "ocasión"** — ni la arquitectura ni el manual de identidad definen reglas de qué hace que un perfume sea "de oficina" vs "de citas" vs "de amigos" vs "diario"; se está asignando con criterio editorial siguiendo el patrón de los productos que sí traían esa etiqueta en los catálogos PDF. Avísame si hay un criterio distinto que debería seguir.

## De la construcción del sitio (fases 2-9)

9. **Dominio real** — el sitio usa `https://www.decantoselecto.com` como marcador de posición en `astro.config.mjs` (`site`) y `src/utils/seo.ts` (`SITE_URL`). Reemplázalo por el dominio real antes de publicar; afecta el sitemap, las URLs canónicas y los datos de Open Graph.
10. **Historia/fundador para "Nosotros"** — no tenía información específica sobre quién está detrás de la marca o cómo nació (más allá del posicionamiento y los tres pilares del manual de identidad), así que la página `/nosotros` se quedó en el terreno de lo que sí puedo afirmar con las fuentes que tengo. Si me compartes una historia real (quién la fundó, desde cuándo, alguna anécdota), la reescribo con eso — se sentirá mucho más humana que lo que hay ahora.
11. **Fotos del proceso de decantado** — la página `/que-es-un-decant` describe el proceso en texto porque no tengo fotos reales de ese momento (frasco original, medición, envasado). El documento de arquitectura sugiere ilustrar esto con fotos reales; si me las compartes, las agrego.
12. **Fotos de portada para el blog** — los 2 artículos publicados no tienen imagen de portada (no había fotos de blog en los archivos de origen). El diseño ya contempla ese caso (se ve un bloque de color en vez de imagen rota), pero 3 imágenes por artículo con alt descriptivo es parte de la guía de estilo del blog — agrégalas cuando las tengas.
13. **Reseñas/testimonios** — el manual de contenidos menciona testimonios de clientes como pieza de redes sociales y prueba social; no se incluyeron en el sitio por no tener ninguno real todavía (regla número uno: no inventar). Cuando tengas capturas de WhatsApp o reseñas de Google reales (con permiso), puedo integrarlas en `/nosotros` o en el inicio.

Este archivo se actualiza en cada fase con lo que se va encontrando. Es la lista que debes revisar completa antes de publicar el sitio.
