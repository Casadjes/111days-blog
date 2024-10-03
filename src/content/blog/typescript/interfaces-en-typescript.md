---
title: "Interfaces en TypeScript: Qué Son y Por Qué Usarlas"
pubDate: 2024-09-29
author: "Jesús Casado"
image: "typescript"
tags: ["typescript"]
slug: entiende-las-interfaces-en-typesript-y-mejora-tu-desarrollo
---

En TypeScript, una **interface** es una forma de definir la estructura que debe seguir un objeto. Permiten declarar cómo deben ser los objetos, clases o funciones, lo que ayuda a tener un código más claro, mantenible y que permite detectar errores de forma temprana en tiempo de desarrollo.

Se puede pensar en ella como un contrato: si una variable o un objeto implementa una interface, debe cumplir con las propiedades y métodos especificados en esa interface.

### ¿Cómo se usan?

1. **Definir la estructura de un objeto**: Una interface describe cómo debe ser un objeto.

```typescript
interface Persona {
  nombre: string;
  edad: number;
}

const persona1: Persona = {
  nombre: "Ana",
  edad: 25,
};
```

Aquí, hemos definido una interface `Persona`, que requiere que el objeto tenga un `nombre` (de tipo string) y una `edad` (de tipo number).

2. **Funciones con interfaces**: Puedes usar interfaces para definir qué tipo de datos espera una función:

```typescript
interface Producto {
  nombre: string;
  precio: number;
}

function mostrarProducto(producto: Producto): void {
  console.log(`${producto.nombre} cuesta ${producto.precio}`);
}
```

Esto garantiza que cualquier objeto que pase a la función `mostrarProducto` tenga un `nombre` y un `precio`.

3. **Interfaces y clases**: También puedes hacer que una clase implemente una interface, lo que significa que la clase debe tener las propiedades y métodos que define la interface.

```typescript
interface Animal {
  nombre: string;
  hacerSonido(): void;
}

class Perro implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log("Guau");
  }
}
```

> Para poder integrar una interface en una clase se utiliza la palabra reservada **implements** seguido del nombre de la interface.

4. **Propiedades opcionales**: Puedes hacer que una propiedad sea opcional usando `?`. Esto significa que esa propiedad no es obligatoria.

```typescript
interface Usuario {
  nombre: string;
  edad?: number;
}

const usuario1: Usuario = { nombre: "Carlos" }; // válido
const usuario2: Usuario = { nombre: "María", edad: 30 }; // también válido
```

### ¿Por qué usarlas?

- **Organización del código**: Las interfaces te ayudan a tener un código más claro, porque definen qué estructura deben tener tus objetos.

- **Prevención de errores**: TypeScript te avisa si no estás siguiendo la estructura correcta, lo que te ayuda a evitar errores.

- **Reutilización**: Puedes definir una interface una vez y usarla en varias partes de tu código, facilitando la mantenibilidad.
