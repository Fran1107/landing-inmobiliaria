# 🏡 Land Inmobiliaria - Landing Page

Este es un proyecto personal de una **landing page inmobiliaria** desarrollado con [Astro](https://astro.build/).  
El objetivo es mostrar propiedades destacadas y secciones informativas de manera rápida, moderna y optimizada para SEO.

---

## ✨ Características
- 🌐 **Landing page responsive** para inmobiliaria.  
- 🏘️ **Listado de propiedades** con páginas dinámicas generadas desde Markdown.  
- 🖼️ **Galería de imágenes** de propiedades y secciones.  
- ⚡ **Rendimiento optimizado** con Astro y carga de imágenes.  
- 🎨 **Estilos con Tailwind CSS** (via `global.css`).  
- 📂 **Arquitectura modular** con componentes reutilizables.  

---

## 📂 Estructura del proyecto
land-inmobiliaria/
├── public/ # Imágenes públicas y favicon
│ └── images/ # Imágenes de propiedades y hero
├── src/
│ ├── assets/ # Recursos adicionales
│ ├── components/ # Componentes Astro (Header, Footer, Cards, etc.)
│ ├── content/ # Contenido en Markdown de propiedades
│ ├── layouts/ # Layout base del sitio
│ ├── pages/ # Rutas del proyecto (index, propiedades dinámicas)
│ └── styles/ # Estilos globales
├── .gitignore
├── astro.config.mjs # Configuración de Astro
├── package.json # Dependencias y scripts
└── tsconfig.json / etc