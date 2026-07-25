# Instrucciones para completar la landing `Negocio360`

Este archivo explica cómo pegar el ID del video de YouTube y cómo añadir las imágenes de soporte para que la página `/soluciones/negocio360` muestre correctamente el iframe y las capturas.

Archivos a editar

- Página del producto: [src/app/soluciones/negocio360/page.tsx](src/app/soluciones/negocio360/page.tsx#L1)

Variables a modificar

1. Insertar ID de YouTube

  - Editá la línea donde está la variable `NEGOCIO360_YOUTUBE_ID` y reemplazá el placeholder:

    const NEGOCIO360_YOUTUBE_ID = 'PEGAR_ID_DEL_VIDEO'

  - Ejemplo con ID real (reemplazá `XXXXXXXXXXX` por el ID del video):

    const NEGOCIO360_YOUTUBE_ID = 'XXXXXXXXXXX'

  - El código detecta si el ID es `PEGAR_ID_DEL_VIDEO` o vacío y mostrará una imagen de respaldo en lugar del iframe.

2. Subir imágenes de respaldo (capturas)

  - Ruta esperada en el repo (usar exactamente estos nombres para que el fallback funcione):
    - `public/images/soluciones/negocio360/negocio360-dashboard.jpg`
    - `public/images/soluciones/negocio360/negocio360-pos.jpg`
    - `public/images/soluciones/negocio360/negocio360-celular.jpg`

  - Si no subís estas imágenes, la página usará automáticamente `public/images/portafolio/negocio360.jpg` como fallback.

Recomendaciones de imagen

- Formato: JPG o PNG
- Tamaño sugerido: 1600x900 px o similar para buena visual en desktop
- Peso: < 500 KB recomendado para mantener velocidad

Comandos para subir y publicar cambios

1. Agregar y commitear (ejemplo si subiste imágenes):

```bash
git add public/images/soluciones/negocio360/* src/app/soluciones/negocio360/page.tsx
git commit -m "chore(negocio360): add screenshots and youtube id"
git push origin main
```

2. Si solo pegás el ID en el archivo y no subís imágenes, conmutá sólo el archivo:

```bash
git add src/app/soluciones/negocio360/page.tsx
git commit -m "chore(negocio360): update youtube id"
git push origin main
```

Vista previa local

```bash
npx next dev -p 3000
# Abrir http://localhost:3000/soluciones/negocio360
```

Si querés, podés adjuntar las imágenes en este chat y yo las subo, commiteo y pusheo por vos.

Contacto rápido

- Variable WhatsApp ya incluida: `WHATSAPP_NEGOCIO360` en el mismo archivo.
- Si necesitás que cambie el texto del CTA o el mensaje de WhatsApp, avisame y lo actualizo.

---
Archivo creado y listo para usar.
