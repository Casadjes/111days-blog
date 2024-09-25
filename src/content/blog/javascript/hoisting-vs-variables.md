---
title: "Entendiendo Variables y Hoisting en JavaScript"
pubDate: 2024-09-24
author: "Jesús Casado"
image: "javascript"
tags: ["javascript", "ES6+"]
slug: entendiendo-variables-y-hoisting-en-javascript
---

El **hoisting** es un comportamiento del intérprete de **JavaScript** en el que las declaraciones de variables y funciones se "mueven" al principio de su contexto de ejecución (ya sea el contexto global o el contexto de una función) antes de que el código se ejecute. Comprender el hoisting y las variables es esencial para escribir código más robusto y predecible.

## Definición de Variables

Las **variables** son espacios de almacenamiento que permiten contener datos que pueden cambiar durante la ejecución del programa. En JavaScript, se pueden declarar utilizando `var`, `let` y `const`.

### Tipos de Variables

- **`var`**: Se utiliza para declarar variables que pueden ser redefinidas y son accesibles en el ámbito de la función o globalmente.

- **`let`**: Introducido en ES6, permite declarar variables que tienen un ámbito de bloque, es decir, están disponibles solo dentro del bloque donde se declaran.

- **`const`**: También introducido en ES6, se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado.

## Hoisting vs Variables :

### var: Hoisting y Comportamiento

`var` es "hoisted", pero está inicializado con undefined, lo que significa que se puede acceder a ella antes de la declaración, aunque su valor será undefined.

```javascript
console.log(c); // undefined
var c = 30;
console.log(c); // 30
```

### let y const: Hoisting y la Zona Temporal Muerta (TDZ)

Por otro lado, `let` y `const` también son "hoisted", pero no están inicializados. Esto significa que no se puede acceder a la variable antes de que se ejecute su declaración, resultando en un error de referencia:

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
```

## Mejores Prácticas

- Utiliza `let` y `const` en lugar de `var` para evitar problemas de ámbito y hoisting inesperado.

- Declara tus variables en el ámbito más limitado posible para mantener el código limpio y reducir errores.

- Siempre inicializa tus variables en el momento de su declaración si es posible.

## Dato Curioso

El **Temporal Dead Zone (TDZ)** es el período en el que una variable declarada con `let` o `const` no puede ser accedida antes de su declaración:

```javascript
console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 15;
```
