---
title: "Explorando los tipos Genéricos: Restricciones"
pubDate: 2024-10-04
author: "Jesús Casado"
image: "typescript"
tags: ["typescript"]
slug: explorando-los-tipos-genericos-restricciones
---

Los **genéricos** en TypeScript permiten crear componentes que funcionen con una variedad de tipos, en lugar de un solo tipo específico. Son útiles para hacer que el código sea más flexible y reutilizable.

Un ejemplo básico de una función genérica sería:

```typescript
function identity<T>(value: T): T {
  return value;
}
```

Aquí, `T` es un **tipo genérico**. Cuando llamamos a esta función, TypeScript deduce el tipo basado en el valor pasado. Si llamamos a `identity(10)`, `T` será inferido como `number`.

## Restricciones de los genéricos

A veces, queremos que un genérico no funcione con cualquier tipo, sino con un conjunto limitado de tipos que tengan ciertas características. Para eso se usan las **restricciones (constraints)**.

### Sintaxis de las restricciones

Puedes aplicar restricciones a los genéricos usando la palabra clave `extends`. Esto indica que el tipo genérico debe cumplir con ciertas propiedades o pertenecer a una clase particular de tipos.

#### Restringir a un tipo en particular o a sus subtipos

Podemos usar extends para limitar un genérico a tipos que extienden de un tipo específico:

```typescript
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
```

En este caso, `T` debe ser un tipo que tenga una propiedad `length` (por ejemplo, `string`, `array` o cualquier objeto con dicha propiedad).

#### Restringir a un tipo primitivo

Si quieres limitar un genérico a tipos como `string`, `number` o `boolean`, puedes hacer algo como esto:

```typescript
function compareValues<T extends string | number>(a: T, b: T): boolean {
  return a === b;
}
```

Esto asegura que `T` solo puede ser un `string` o un `number`, y no cualquier otro tipo.

#### Restricciones con tipos complejos

Si tienes un tipo más complejo, puedes restringir un genérico para que acepte solo aquellos que cumplan con una forma específica de interfaz:

```typescript
interface HasId {
  id: number;
}

function getItemById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}
```

Aquí, `T` está restringido a cualquier tipo que tenga una propiedad `id` de tipo `number`.

### Restricciones múltiples

Puedes imponer **múltiples restricciones** usando una intersección de tipos:

```typescript
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
```

Esto asegura que tanto `T` como `U` deben ser objetos, y la función devolverá un nuevo objeto que sea la combinación de ambos.

---

Los genéricos con restricciones en TypeScript permiten crear componentes más flexibles y seguros. Puedes limitar los tipos que pueden ser pasados a una función o clase, lo que hace que el código sea más predecible y menos propenso a errores.
