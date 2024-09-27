---
title: "Entendiendo cómo Funciona el Spread y Rest operator"
pubDate: 2024-09-26
author: "Jesús Casado"
image: "javascript"
tags: ["javascript", "ES6+"]
slug: entendiendo-como-funciona-el-spread-y-rest-operator
---

El **spread operator** y el **rest operator** en JavaScript usan la misma sintaxis (`...`), pero tienen funciones diferentes según el contexto.

## Spread Operator

El **spread operator** se usa para "expandir" un array u objeto, es decir, toma todos los elementos y los distribuye individualmente. Es útil cuando necesitas pasar o copiar elementos en otro contexto que espera valores separados. La idea de "expandir" se refiere a tomar un conjunto de elementos (como los elementos de un array u objeto) y separarlos en sus partes individuales.

### Es comúnmente utilizado en:

#### Arrays:

```javascript
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5];
// nuevosNumeros es [1, 2, 3, 4, 5]
```

Aquí el spread `...numeros` "expande" el array original y coloca sus elementos en el nuevo array.

#### Objetos:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
//obj2 es { a: 1, b: 2, c: 3 }
```

#### Pasar argumentos a funciones:

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // 6
```

En lugar de pasar manualmente cada uno de los valores de forma individual, el **spread operator** toma todos los elementos del array `numbers` y los distribuye como si hubieran sido pasados individualmente a la función.

## Rest Operator

El **rest operator** se usa para "agrupar" múltiples elementos en un array u objeto. Es útil cuando no sabes cuántos argumentos recibirá una función o cuando quieres capturar los elementos restantes de un array u objeto en una sola variable. La idea de "agrupar" es tomar varios elementos y reunirlos en una estructura.

### Es comúnmente utilizado en:

#### Funciones con múltiples argumentos:

```javascript
function sumar(...numeros) {
  return numeros.reduce((acum, num) => acum + num, 0);
}

sumar(1, 2, 3); // 6
```

Aquí, `...numeros` agrupa todos los argumentos en un array llamado `numeros`.

#### Desestructuración de Arrays:

```javascript
const [primero, ...rest] = [1, 2, 3, 4];
console.log(primero); // 1
console.log(rest); // [2, 3, 4]
```

En este ejemplo, `...rest` agrupa todos los elementos restantes del array después del primero en un nuevo array llamado `rest`.

#### Desestructuración de Objetos:

```javascript
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```

## Dato a tener en cuenta al usar el Spread Operator

Cuando se utiliza el **spread operator** para copiar un objeto en JavaScript, se realiza una **copia superficial** (_shallow copy_) del objeto original. Esto significa que los valores primitivos (como números, strings, etc.) se copian por valor, pero los objetos anidados (como otros objetos o arrays) se copian por referencia. Esto puede llevar a efectos no deseados si no se comprende bien cómo funciona.

### Ejemplo de copia superficial:

```javascript
const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const copy = { ...original };

// Modificamos la propiedad 'city' del objeto anidado 'address'
copy.address.city = "Los Angeles";

console.log(original.address.city); // "Los Angeles"
console.log(copy.address.city); // "Los Angeles"
```

El objeto `copy` es una nueva referencia que copia las propiedades del objeto original. Sin embargo, las propiedades que son objetos anidados, como `address`, no se copian por valor; en su lugar, se copian por referencia.

Cuando cambias la propiedad `city` del objeto `address` en `copy`, también cambias la propiedad `city` del objeto `address` en original. Esto ocurre porque `copy.address` y `original.address` apuntan al mismo objeto en memoria.

Esto significa que ambos objetos (`original` y `copy`) están compartiendo la misma referencia para el objeto `address`. Cualquier cambio en `address` dentro de `copy` también afectará a `original`, y viceversa.

### Copia Profunda

Si te interesa saber cómo hacer una **copia profunda** usando el **spread operator**, puedes visitar este <a href="https://stackoverflow.com/questions/38416020/deep-copy-in-es6-using-the-spread-syntax" target="_blank" rel="noopener noreferrer">enlace</a>.
