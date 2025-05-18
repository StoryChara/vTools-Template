# vTools Event Code Visualizer

[![Website](https://img.shields.io/badge/Website-vTools%20Template-blue)](https://vtools-template.vercel.app/)

Visualizador interactivo para la copia de código para el registro de eventos en la plataforma IEEE vTools.

## Descripción

**vTools Event Code Visualizer** es una aplicación web construida con React y Node.js diseñada para visualizar en tiempo real el código para un registro más estilizado y personalizado, y copiarlo fácilmente para su uso directo en la plataforma oficial de IEEE.

Accede a la aplicación aquí: [vTools Template](https://vtools-template.vercel.app/)

## Características principales

- **Visualización Dinámica de Código**: Visualiza automáticamente el código de la rama seleccionada para el registro del evento.
- **Copia Rápida al Portapapeles**: Permite copiar el código generado con un solo clic.
- **Interfaz Responsiva**: Optimizado para dispositivos de escritorio y móviles.

## Demo

Puedes probar la aplicación online en: [https://vtools-template.vercel.app/](https://vtools-template.vercel.app/)

## Tecnologías Utilizadas

- **Frontend:** React, HTML5, CSS
- **Backend:** Node.js
- **Herramientas adicionales:** JavaScript, [React Hooks](https://react.dev/), [navigator.clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

## Instalación local

1. Clona este repositorio:
   ```sh
   git clone https://github.com/StoryChara/vTools-Template.git
   cd vTools-Template
   ```

2. Instala dependencias:
   ```sh
   npm install
   ```

3. Ejecutar aplicación:
   ```sh
   npm start
   ```

4. Accede a `http://localhost:3000` en tu navegador.

## Uso

1. Visualiza el código generado en el área de previsualización.
2. Haz clic en el botón “Copiar código” para trasladarlo fácilmente a la página de IEEE vTools.

## Estructura del Proyecto

```
vtools-event-code-visualizer/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   ├── ramas/
│   ├── routes/
│   │   ├── Preview.css
│   │   ├── Preview.jsx
│   │   ├── PreviewSections.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── README.md
├── package.json
└── ...
```