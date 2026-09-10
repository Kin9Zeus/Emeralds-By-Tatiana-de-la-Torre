# Emeralds by Tatiana De La Torre

Bienvenido al repositorio oficial del sitio web de **Emeralds by Tatiana De La Torre**, una plataforma digital premium diseñada para exhibir y destacar la calidad de las esmeraldas colombianas. 

Este proyecto ha sido desarrollado con los más altos estándares de la industria, asegurando un rendimiento óptimo, una experiencia de usuario fluida y un diseño visual de vanguardia.

## 💎 Características Principales

* **Diseño UI/UX Premium:** Interfaz de usuario sofisticada y moderna, enfocada en resaltar la belleza natural de las esmeraldas mediante el uso de espacios, tipografías elegantes y una paleta de colores inmersiva.
* **Animaciones Fluidas (GSAP & Framer Motion):** Implementación de animaciones avanzadas impulsadas por GSAP y Motion, incluyendo efectos de *parallax*, apariciones escalonadas (*staggered reveals*) y transiciones suaves que enriquecen la navegación.
* **Smooth Scrolling (Lenis):** Integración de Lenis para un desplazamiento suave y natural a lo largo de toda la página, mejorando drásticamente la sensación premium del sitio.
* **Optimización SEO Avanzada:** Metadatos dinámicos y marcado estructurado (JSON-LD) para maximizar la visibilidad en motores de búsqueda, garantizando un excelente posicionamiento orgánico.
* **Totalmente Responsivo:** Adaptación perfecta a cualquier dispositivo (móviles, tablets y pantallas de escritorio), brindando la mejor experiencia sin importar la resolución.
* **Rendimiento Excepcional:** Arquitectura moderna con Next.js App Router, optimización automática de imágenes estáticas y fuentes, logrando tiempos de carga mínimos.

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando tecnologías modernas, eficientes y altamente escalables:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) para un código robusto, seguro y libre de errores.
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) para un diseño de componentes ágil y un sistema de diseño consistente.
* **Animaciones:** [GSAP](https://gsap.com/) y [Framer Motion](https://www.framer.com/motion/)
* **Scroll:** [Lenis](https://lenis.studiofreight.com/)

## 🚀 Instalación y Ejecución Local

Para compilar y ejecutar este proyecto en un entorno de desarrollo local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd emeralds-site
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Visualizar el sitio:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para interactuar con la aplicación.

## 📦 Despliegue en Producción

Para compilar el proyecto y prepararlo para un entorno de producción (ej. Vercel, AWS, etc.):

```bash
npm run build
npm run start
```

## 📐 Estructura del Proyecto

La arquitectura del código fuente sigue principios de diseño modular y escalabilidad:

- `/src/app`: Rutas de la aplicación, configuración SEO global (sitemap, robots.txt) y estilos principales.
- `/src/components`: Componentes reutilizables estrictamente tipados, organizados en:
  - `/sections`: Secciones visuales principales de la página (Hero, Origin, Trust, etc.).
  - `/ui`: Elementos de interfaz gráfica globales (Navbar, Footer, botones).
  - `/providers`: Proveedores de contexto para el ciclo de vida de animaciones y scroll.
  - `/seo`: Componentes para la inyección de estructuración de datos para indexadores web.
- `/public`: Activos estáticos optimizados, incluyendo imágenes, videos de fondo y favicons multiplataforma.

---
*Desarrollado con estricto profesionalismo, enfocado en el rendimiento y la atención al detalle.*