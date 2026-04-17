# Shanon Gómez — Landing Page

Landing page profesional bilingüe (ES/EN) para el servicio de acompañamiento de Shanon Gómez, enfermera jefe especializada en cuidado crítico del adulto.

## Objetivo

Generar conversaciones por WhatsApp con potenciales clientes interesados en el servicio de acompañamiento profesional para padres de recién nacidos.

## Estructura de secciones

1. **Header** — Logo textual, menú de navegación sticky, switch ES/EN, botón WhatsApp
2. **Hero** — Título, subtítulo emocional, dos CTA hacia WhatsApp
3. **Sobre Shanon** — Presentación profesional, formación, bullets de valor
4. **Servicios** — Tres cards: acompañamiento inicial (principal), primeros días en casa, orientación bilingüe
5. **Cómo funciona** — 3 pasos: escribir por WhatsApp → agendar → recibir acompañamiento
6. **Diferenciales** — Cuatro razones para elegir el servicio
7. **FAQ** — Acordeón con 4 preguntas frecuentes
8. **CTA final** — Bloque emocional de cierre con botón WhatsApp
9. **Footer** — Logo, descripción, links, WhatsApp

## Idiomas

- Idioma por defecto: **español**
- Switch ES / EN visible en el header
- Todos los textos cambian dinámicamente sin recargar la página
- El mensaje predeterminado de WhatsApp cambia según el idioma activo
- La preferencia de idioma se guarda en `localStorage`

## WhatsApp

- Número: `+57 324 276 2563`
- Botón flotante fijo (esquina inferior derecha)
- Botón en el header
- Botones CTA en hero, servicios y sección final
- Mensaje en español: _"Hola Shanon, vi tu página web y me gustaría recibir información sobre tu acompañamiento profesional para padres de recién nacidos."_
- Mensaje en inglés: _"Hello Shanon, I saw your website and I would like to get more information about your professional support service for parents of newborns."_

## Diseño

- **Paleta:** blanco, crema (`#FAF8F3`), verde salvia (`#7B9E8A`), gris cálido
- **Tipografía:** Cormorant Garamond (títulos, serif elegante) + DM Sans (cuerpo, sans-serif moderno)
- **Animaciones:** entradas suaves con IntersectionObserver
- **Responsive:** mobile-first; menú hamburguesa en móvil

## Foto de Shanon

Actualmente hay un placeholder elegante con la inicial **S** en el color sage de la marca.

Cuando Shanon tenga una foto profesional, se agrega así en `index.html`:

```html
<!-- Buscar el elemento con clase "about-photo" y añadir el style: -->
<div class="about-photo" style="background-image: url('img/shanon.jpg')">
```

La foto debe guardarse en `img/shanon.jpg` (o el formato que corresponda). El elemento ya tiene `background-size: cover` y `background-position: center top` definidos en el CSS, por lo que se ajustará automáticamente.

## Archivos

```
shanon/
├── index.html       — estructura completa de la página
├── css/
│   └── styles.css   — todos los estilos (variables, secciones, responsive)
├── js/
│   └── main.js      — idioma, WhatsApp, FAQ, menú, animaciones
└── site.md          — este archivo
```

## Despliegue

Repositorio: [egomez-dev/shanon](https://github.com/egomez-dev/shanon)

Recomendado: conectar a Vercel apuntando al repo para despliegue automático en cada push a `main`.
