---
title: "Creando un Proyecto desde Cero con Typescript"
pubDate: 2024-09-30
author: "Jesús Casado"
image: "typescript"
tags: ["typescript"]
slug: creando-un-proyecto-desde-cero-con-typescript
---

En este artículo, te guiaré paso a paso en la integración de TypeScript en tu proyecto desde cero, de manera sencilla y en solo 6 pasos. A lo largo de esta guía, descubrirás cómo configurar tu entorno, escribir tu primer archivo TypeScript y compilar tu código, lo que te permitirá aprovechar al máximo las ventajas que ofrece este poderoso lenguaje.

## Paso 1

---

### Configurar un Proyecto TypeScript desde Cero

**Inicializa un proyecto de Node.js**: Si aún no tienes un proyecto de Node.js, empieza inicializando uno con npm init:

```bash
npm init -y
```

Esto creará un archivo `package.json` para gestionar las dependencias del proyecto.

## Paso 2

---

### Instala TypeScript

Instala TypeScript como dependencia de desarrollo:

```bash
npm install typescript --save-dev
```

## Paso 3

---

### Crea el archivo de configuración

Para iniciar TypeScript, necesitas un archivo de configuración `tsconfig.json`. Puedes crearlo ejecutando el siguiente comando:

```bash
npx tsc --init
```

Este comando generará un archivo con configuraciones predeterminadas para TypeScript.

### Configuración básica del tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6", // Compila a ES6
    "module": "commonjs", // Usa el sistema de módulos de Node.js
    "outDir": "./dist", // Coloca los archivos compilados en 'dist'
    "strict": true, // Habilita la verificación estricta de tipos
    "esModuleInterop": true // Interoperabilidad con módulos ES
  },
  "include": ["src"], // Incluye archivos en la carpeta 'src'
  "exclude": ["node_modules"] // Excluye la carpeta 'node_modules'
}
```

## Paso 4

---

### Estructura del Proyecto

Crea una carpeta `src` para tus archivos TypeScript. Esta será la carpeta que contendrá tus archivos `.ts`.

```bash
mkdir src
```

## Paso 5

---

### Escribir un Archivo TypeScript

Dentro de la carpeta `src`, crea un archivo llamado `index.ts`:

```typescript
const suma = (a: number, b: number): number => {
  return a + b;
};

suma(2, 2);
```

## Paso 6

---

### Compilar TypeScript a JavaScript

Compila tu código TypeScript a JavaScript ejecutando el siguiente comando:

```bash
npx tsc
```

Esto generará una carpeta `dist` que contendrá los archivos JavaScript compilados. Ahora deberías ver un archivo `index.js` en la carpeta `dist`.

### Revisando el index.js

Después de compilar el código, el archivo `index.js` debería verse de la siguiente manera:

```javascript
"use strict";

const suma = (a, b) => {
  return a + b;
};
suma(2, 2);
```

> Si estás interesado en ver un ejemplo práctico de cómo integrar **TypeScript** en un proyecto, no dudes en visitar mi repositorio en GitHub. Puedes encontrarlo <a href="https://github.com/Casadjes/typescript-desde-cero" target="_blank">aquí</a>
