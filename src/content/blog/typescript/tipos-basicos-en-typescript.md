---
title: "Explorando los tipos básicos en TypeScript"
pubDate: 2024-09-28
author: "Jesús Casado"
image: "typescript"
tags: ["typescript"]
slug: explorando-los-tipos-basicos-en-typescript
---

TypeScript, una extensión tipada de JavaScript, introduce un poderoso sistema de tipos que ayuda a detectar errores y escribir código más seguro. Los tipos básicos son la base de este sistema, y aprender a utilizarlos correctamente es esencial para aprovechar las ventajas de TypeScript.

En este artículo, exploraremos los tipos básicos como `number`, `string`, `boolean`, `array`, entre otros, que nos permiten definir el comportamiento y las restricciones de nuestras variables. Entender cómo funcionan y cuándo utilizarlos te ayudará a escribir código más predecible y fácil de mantener, evitando errores comunes que pueden ocurrir cuando se trabaja con JavaScript puro.

### Estos son los principales tipos básicos que deberías conocer:

1. ### number

El tipo `number` representa valores numéricos, incluyendo enteros y decimales. En TypeScript, todos los números son del mismo tipo, y puedes realizar operaciones matemáticas con ellos.

```typescript
let age: number = 30; // Un número entero
let price: number = 19.99; // Un número decimal
```

2. ### string

El tipo `string` se utiliza para representar cadenas de texto. Puedes definir strings usando comillas simples, dobles o backticks para interpolación de variables.

```typescript
let name: string = "Jesus"; // Una cadena de texto
let saludo: string = `Hello, ${name}!`; // Interpolación
```

3. ### boolean

El tipo **boolean** representa valores de verdad, que pueden ser `true` o `false`. Es útil para controlar la lógica condicional en tu código.

```typescript
let isActive: boolean = true; // Valor verdadero
let isLoggedIn: boolean = false; // Valor falso
```

4. ### null y undefined

El tipo `null` indica la ausencia intencional de un valor. Se usa para señalar que una variable no tiene un valor asignado.

El tipo `undefined` representa un valor no definido. Este valor se asigna automáticamente a las variables que han sido declaradas pero no inicializadas.

```typescript
let emptyValue: null = null; // Ausencia de valor
let notInitialized: undefined; // Sin valor asignado
```

5. ### array

El tipo `array` permite almacenar listas de valores del mismo tipo. Los elementos se acceden mediante índices numéricos y puedes usar métodos para manipular la colección.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5]; // Un array de números
let fruits: Array<string> = ["apple", "banana", "cherry"]; // Un array de strings
```

> Támbien puedes usar **`string[]`** para tipar la variable `fruits`, solo queria mostrar otra forma de hacerlo.

6. ### tuple

Las **tuplas** permiten definir un array con un número fijo de elementos, donde cada elemento puede tener un tipo diferente. Esto es útil para agrupar diferentes tipos de datos en una sola estructura.

```typescript
let person: [string, number] = ["Alice", 30];
```

7. ### enum

Los **enums** permiten dar nombres a un conjunto de valores relacionados, facilitando el uso de constantes con significado descriptivo. Los miembros de un enum se asignan automáticamente a números enteros.

```typescript
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}
let c: Color = Color.Green; // c tiene el valor 1
```

8. ### any

El tipo `any` permite asignar cualquier tipo de valor a una variable. Es útil cuando no se conoce el tipo de dato específico, pero su uso debe ser limitado para mantener la seguridad del tipo.

```typescript
let data: any = "Hello"; // Puede ser una cadena
data = 100; // O un número
```

9. ### void

El tipo `void` se utiliza principalmente en funciones para indicar que no devuelven un valor. Se usa comúnmente en funciones que realizan una acción sin producir un resultado.

```typescript
function logMessage(message: string): void {
  console.log(message); // No devuelve ningún valor
}
```

10. ### object

El tipo `object` se utiliza para representar una colección de propiedades que pueden tener diferentes tipos de valores. A diferencia de los tipos primitivos, como `number` y `string`, `object` se refiere a cualquier entidad que no sea un tipo primitivo. Esto incluye arreglos, funciones y objetos en sí.

```typescript
let person: object = { name: "John", age: 25 };
```

> Estudiar estos tipos básicos te permitirá aprovechar al máximo las ventajas de TypeScript al detectar errores de tipo antes de ejecutar tu código.
