---
title: "Entendiendo Funciones y Hoisting en JavaScript ES6+"
pubDate: 2024-09-25
author: "Jesús Casado"
image: "javascript"
tags: ["javascript", "ES6+"]
slug: entendiendo-funciones-y-hoisting-en-javascript-es6+
---

El **hoisting** es un comportamiento del intérprete de **JavaScript** en el que las declaraciones de variables y funciones se "mueven" al principio de su contexto de ejecución (ya sea el contexto global o el contexto de una función) antes de que el código se ejecute. Comprender el hoisting y las funciones es esencial para escribir código más robusto y predecible.

## Definición de una función

En JavaScript, una **función** es un bloque de código diseñado para realizar una tarea específica. Las funciones permiten organizar y reutilizar código, lo que las convierte en una de las herramientas más poderosas del lenguaje. Una función puede tomar entradas (parámetros), realizar operaciones con esos datos y devolver un resultado.

## Hoisting vs Funciones :

### funciones declaradas

**Definición**: Las funciones declaradas son aquellas que se definen con la sintaxis clásica usando la palabra clave `function`.

Las **funciones declaradas** son completamente hoisted. Esto significa que puedes llamar a la función antes de que se defina en el código, y el intérprete de JavaScript moverá la declaración al inicio del contexto de ejecución. Este comportamiento es único de las funciones declaradas, y no ocurre de la misma manera con las funciones expresadas o las arrow functions.

```javascript
// Llamando a la función antes de su declaración
saludar(); // Hola, bienvenid@!

function saludar() {
  console.log("Hola, bienvenid@!");
}
```

En este ejemplo, la función `saludar` es llamada antes de su declaración en el código, pero gracias al hoisting, JavaScript mueve la declaración de la función al inicio del contexto de ejecución, permitiendo que la función funcione correctamente.

### funciones flecha

**Definición**: Las funciones flecha son una sintaxis más concisa para escribir funciones, introducida en **ES6+**. Generalmente, se asignan a una variable.

Las **funciones flecha** son funciones anónimas asignadas a una variable, por lo tanto, su comportamiento está más relacionado con el hoisting de la variable a la que se asignan.

Si usas `let` o `const` para declarar la variable que contiene la **función flecha**, la variable es hoisted, pero no está inicializada hasta que se ejecuta la declaración. Intentar llamar a la función antes de la declaración resultará en un ReferenceError.

```javascript
console.log(saludar); // ReferenceError: Cannot access 'saludar' before initialization
const saludar = () => {
  console.log("Hola");
};
```

Si usas `var`, la variable será hoisted e inicializada con `undefined`. Intentar llamar a la función antes de su asignación generará un **TypeError** porque estarás intentando ejecutar `undefined` como una función.

```javascript
console.log(saludar); // undefined
saludar(); // TypeError: saludar is not a function

var saludar = () => {
  console.log("Hola");
};
```
