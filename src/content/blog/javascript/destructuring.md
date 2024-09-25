---
title: "Destructuring en JavaScript: Simplifica tu Código"
pubDate: 2024-09-25
author: "Jesús Casado"
image: "javascript"
tags: ["javascript", "ES6+"]
slug: destructuring-en-javascript-simplifica-tu-codigo
---

El **destructuring** en JavaScript es una característica que permite extraer valores de arrays u objetos y asignarlos a variables de una manera más concisa y legible. Esta técnica facilita el acceso y la asignación de múltiples valores al mismo tiempo.

## Arrays

Con **destructuring de arrays**, puedes asignar elementos de un array a
variables individuales.

```javascript
const numeros = [1, 2, 3, 4, 5];

const [primero, segundo, tercero] = numeros;

console.log(primero); // 1
console.log(segundo); // 2
console.log(tercero); // 3
```

## Objetos

Con **destructuring de objetos**, puedes extraer propiedades de un objeto y asignarlas a variables con los mismos nombres de las propiedades:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

const { nombre, edad, ciudad } = persona;

console.log(nombre); // Juan
console.log(edad); // 30
console.log(ciudad); // Madrid
```

Puedes proporcionar valores predeterminados en caso de que la propiedad no exista en el objeto:

```javascript
const persona = {
  nombre: "Juan",
  edad: 30,
};

const { nombre, edad, ciudad = "desconocida" } = persona;

console.log(nombre); // Juan
console.log(edad); // 30
console.log(ciudad); // desconocida
```

## Funciones

El **destructuring** también se puede utilizar en los parámetros de las funciones:

```javascript
function saludar({ nombre, edad }) {
  console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}

saludar(persona); // Hola, Juan. Tienes 30 años.
```

Aquí, los parámetros `nombre` y `edad` se extraen directamente del objeto pasado a la función.

El **destructuring** es una forma poderosa de escribir código más limpio y legible, reduciendo la necesidad de acceder manualmente a las propiedades y elementos de arrays y objetos.
