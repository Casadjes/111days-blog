---
title: "Entendiendo let y const en ES6: Lo que Necesitas Saber"
pubDate: 2024-09-24
author: "Jesús Casado"
image: "javascript"
tags: ["javascript", "ES6"]
slug: entendiendo-let-y-const-en-es6-lo-que-necesitas-saber
---

## let

- **Mutabilidad**: Las variables declaradas con `let` pueden cambiar su valor.

- **Alcance**: Tienen un alcance de bloque, lo que significa que son accesibles solo dentro del bloque de código en el que se definen (por ejemplo, dentro de un `if`, `for`, etc.).

### Ejemplo:

```javascript
let a = 10;
console.log(a); // Salida: 10

a = 20; // Se puede cambiar el valor
console.log(a); // Salida: 20

if (true) {
  let b = 30; // 'b' está disponible solo dentro de este bloque
  console.log(b); // Salida: 30
}

console.log(b); // ReferenceError: b is not defined
```

## const

- **Inmutabilidad**: Las variables declaradas con `const` deben ser inicializadas en el momento de la declaración y no se pueden reasignar. Esto significa que no puedes cambiar la referencia de la variable a un nuevo valor. Sin embargo, si la variable contiene un objeto o un array, los elementos internos de estos sí pueden ser modificados.

- **Alcance**: Al igual que `let`, `const` también tiene un alcance de bloque.

### Ejemplo:

```javascript
const b = 30;
// b = 40; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // Esto es válido, se modifica el contenido del array
console.log(arr); // Salida: [1, 2, 3, 4]

// arr = [5, 6]; // TypeError: Assignment to constant variable.
```

## Modificación de Objetos y Arrays

Aunque `const` impide que la variable sea reasignada a un nuevo objeto o array, puedes modificar las propiedades del objeto o los elementos del array.

### Ejemplo:

```javascript
const obj = { name: "Alice" };
obj.name = "Bob"; // Esto es válido
console.log(obj.name); // Salida: Bob

const numbers = [1, 2, 3];
numbers[0] = 10; // Esto es válido
console.log(numbers); // Salida: [10, 2, 3]
```

Tanto `let` como `const` tienen un alcance de **bloque**, lo que significa que solo están disponibles dentro del bloque "({})" donde se definen. Esto es diferente a `var`, que tiene un alcance de **función** o **global**.
