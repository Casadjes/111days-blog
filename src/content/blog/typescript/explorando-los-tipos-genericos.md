---
title: "Explorando los tipos genericos en Typescript"
pubDate: 2024-10-03
author: "Jesús Casado"
image: "typescript"
tags: ["typescript"]
slug: explorando-los-tipos-genericos-en-typescript
---

Los **genéricos** en TypeScript son una característica poderosa que permite escribir funciones, clases, y tipos que trabajan de manera flexible con diferentes tipos, manteniendo la seguridad del tipo.

## Genéricos

---

Un **genérico** es una especie de "parámetro de tipo" que puedes usar cuando el tipo específico no está definido hasta el momento de la ejecución. En lugar de fijar un tipo particular, como `string` o `number`, usas un parámetro de tipo como `T` (que es una convención) que puede representar cualquier tipo.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let stringIdentity = identity<string>("Hello");
let numberIdentity = identity<number>(42);
```

Aquí, la función `identity` acepta cualquier tipo como argumento y lo retorna. Usamos `<T>` como un "placeholder" para el tipo que será determinado cuando llamamos a la función. Así que cuando llamamos `identity<string>("Hello")`, `T` se convierte en `string` y, en el caso de `identity<number>(42)`, `T` se comvierte en `number`.

### Genéricos en Funciones

Uno de los casos más comunes para genéricos es en funciones.

#### Función con genéricos que devuelve el primer elemento de un array:

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // inferido como number
const firstString = getFirstElement(["a", "b", "c"]); // inferido como string
```

Aquí, la función `getFirstElement` puede aceptar un array de cualquier tipo (`T[]`). El tipo de retorno será del mismo tipo que los elementos del array. En el ejemplo, `firstNumber` será de tipo `number`, mientras que `firstString` será de tipo `string`.

### Genéricos con múltiples parámetros de tipo

Puedes tener más de un parámetro de tipo en una función genérica.

```typescript
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

let pairResult = pair<string, number>("Age", 30); // retorna una tupla ["Age", 30]
```

Aquí, `K` representa el tipo de la clave y `V` el tipo del valor, lo que permite que la función trabaje con cualquier par de tipos, como `string` y `number`.

### Genéricos en Interfaces

Los genéricos no solo funcionan en funciones; también pueden usarse en interfaces.

```typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Esto es un string" };
const numberBox: Box<number> = { content: 123 };
```

Aquí, `Box` es una interfaz genérica que puede almacenar cualquier tipo de contenido. `Box<string>` significa que el `content` será un string, mientras que `Box<number>` asegura que content será un número.

#### Interfaz con función genérica

```typescript
interface Result<T> {
  success: boolean;
  value?: T;
  error?: string;
}

function handleResponse<T>(response: Result<T>): T | string {
  if (response.success && response.value !== undefined) {
    return response.value;
  }
  return response.error ?? "Unknown error";
}

let stringResponse: Result<string> = { success: true, value: "Data received" };
let errorResponse: Result<number> = { success: false, error: "Failed" };

console.log(handleResponse(stringResponse)); // "Data received"
console.log(handleResponse(errorResponse)); // "Failed"
```

Aquí, `Result<T>` es una interfaz genérica que representa el resultado de una operación. Puede tener éxito y contener un valor de tipo `T`, o puede fallar y contener un mensaje de error. Esto permite manejar diferentes tipos de respuestas de forma genérica.

### Desglose y explicación

**Interfaz genérica** `Result<T>`

```typescript
interface Result<T> {
  success: boolean;
  value?: T;
  error?: string;
}
```

- `<T>`: Este es un tipo genérico, lo que significa que `T` puede ser cualquier tipo que pasemos cuando usamos la interfaz `Result`. Podría ser `string`, `number`, un objeto, etc.

- `success: boolean`: Indica si la operación fue exitosa o no.

- `value?: T`: Este es el valor opcional (que será del tipo `T`) que contiene los datos en caso de éxito.

- `error?: string`: Mensaje de error opcional, que se usa en caso de que la operación no sea exitosa.

**Declaración de la función genérica** `handleResponse`:

```typescript
function handleResponse<T>(response: Result<T>): T | string {
  //...codigo
}
```

`<T>`: La función es genérica, y `T` es un parámetro de tipo que será inferido según el valor que pasemos cuando llamemos a la función.

### Por ejemplo:

El tipo genérico `T` en `handleResponse` es `string` cuando pasas `stringResponse`

```typescript
let stringResponse: Result<string> = { success: true, value: "Data received" };

handleResponse(stringResponse);
```

veamos:

- `stringResponse` es de tipo `Result<string>`.

- TypeScript infiere que el tipo genérico `T` en `handleResponse<T>` es `string`.

- Por lo tanto, para esta llamada específica, la función es tratada como `handleResponse<string>`.

**`response: Result <T>` es un objeto**

```typescript
function handleResponse<T>(response: Result<T>): T | string {
  //...codigo
}
```

Dentro de la función `handleResponse`, el parámetro `response` es un objeto que cumple con la interfaz `Result<T>`. En este caso, `Result<string>`. Por lo tanto, `response` es un objeto con las siguientes propiedades:

- `success: boolean`: Indica si la operación fue exitosa.

- `value?: T`: En este caso, `value?: string`. Puede contener un `string` si la operación es exitosa.

- `error?: string`: Mensaje de error opcional si la operación falla.

**Accedes a las propiedades del objeto y devuelves un valor del mismo tipo que infiere la función**

```typescript
if (response.success && response.value !== undefined) {
  return response.value;
}
return response.error ?? "Unknown error";
```

**Compruebas las propiedades:**

- `response.success`: Verificas si la operación fue exitosa.

- `response.value !== undefined`: Te aseguras de que haya un valor disponible.

**Devuelves un valor del mismo tipo que** `T`:

- Si la operación es exitosa y hay un valor, **devuelves** `response.value`, que es de tipo `T` (en este caso, `string`).

- Si la operación falla, **devuelves** `response.error` o el string `"Unknown error"`, que son de tipo `string`.

**El tipo de retorno es coherente con el tipo inferido**

```typescript
function handleResponse<T>(response: Result<T>): T | string;
```

**Tipo de retorno**: Puede ser de tipo `T` o `string`.

**En este caso**:

- Cuando `T` es `string`, el tipo de retorno es `string | string`, que sigue siendo `string`.

- Si hubiéramos tenido `T` como otro tipo (por ejemplo, `number`), el retorno sería `number | string`.
