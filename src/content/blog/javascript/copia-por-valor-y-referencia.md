---
title: "Copia por Valor y por Referencia: Conceptos Clave"
pubDate: 2024-09-27
author: "Jesús Casado"
image: "javascript"
tags: ["javascript"]
slug: copia-por-valor-y-por-referencia-conceptos-clave
---

En JavaScript, cuando hablamos de "**copiar por valor**" o "**copiar por referencia**", nos referimos a cómo se manejan y transfieren los datos en la memoria cuando se asignan o pasan variables.

## Copia por Valor

Cuando un valor se copia por **valor**, se crea una copia independiente del valor original. Esto significa que cualquier cambio realizado en la copia no afectará al valor original, y viceversa. En JavaScript, los tipos de datos que se copian por valor incluyen:

- **Primitivos**: Números (`Number`),
- **cadenas de texto**: (`String`),
- **booleanos**: (`Boolean`),
- **símbolos**: (`Symbol`),
- `null`, y `undefined`.

### Ejemplo de copia por Valor

```javascript
let a = 10;
let b = a; // Se copia el valor de 'a' en 'b'

b = 20; // Cambiamos el valor de 'b'
console.log(a); // 10 (a no se ve afectado)
console.log(b); // 20
```

Aquí, `b` es una copia independiente de `a`. Modificar `b` no afecta a `a` porque se hizo una **copia por valor**.

## Copia por Referencia

Cuando un valor se copia por **referencia**, no se copia el valor en sí, sino la dirección en memoria donde se almacena ese valor. Esto significa que múltiples variables pueden apuntar al mismo objeto o array en memoria. Si alguna de esas variables modifica el objeto o array, las otras variables que apuntan a ese mismo lugar en la memoria también "verán" esos cambios.

En JavaScript, los tipos de datos que se copian por referencia incluyen:

- **Objetos** (`Object`),
- **arreglos** (`Array`).
- **funciones** (`Function`).

### Ejemplo de copia por Referencia

```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // Se copia la referencia, no el valor

obj2.name = "Bob"; // Modificamos obj2
console.log(obj1.name); // "Bob" (obj1 se ve afectado)
console.log(obj2.name); // "Bob"
```

Aquí, tanto `obj1` como `obj2` apuntan al mismo objeto en la memoria. Cambiar `obj2.name` también cambia `obj1.name` porque ambos están referenciando el mismo lugar en la memoria.
