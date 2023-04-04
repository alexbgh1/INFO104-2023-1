# Javascript

## Tipos de datos

Hay diferentes tipos de datos en Javascript. Notar que no hay tipado fuerte, es decir, una variable puede cambiar de tipo.

### Primitivos

```js
let a = 1; // number
let b = "hola"; // string
let c = true; // boolean
let d = null; // null
let e = undefined; // undefined
let f = Symbol("id"); // symbol
```

### Objetos

```js
let a = { name: "John", age: 30 }; // object
let b = [1, 2, 3]; // object
let c = function () {}; // function
```

## Variables

```js
var a = 1; // variable scope global
let b = 1; // variable scope local
const c = 2; // constante
```

> **Note**
> Scope: ámbito de una variable. Ej una variable declarada dentro de una función solo puede ser accedida dentro de esa función.

## Métodos de array

Existen muchos métodos de array que nos permiten manipular los datos de una manera más sencilla.

```js
let a = [1, 2, 3, 4, 5];
a.push(6); // [1, 2, 3, 4, 5, 6]
a.pop(); // [1, 2, 3, 4, 5]
a.shift(); // [2, 3, 4, 5]
a.unshift(1); // [1, 2, 3, 4, 5]
a.slice(1, 3); // [2, 3]
a.splice(1, 2); // [1, 4, 5]
a.splice(1, 0, 2, 3); // [1, 2, 3, 4, 5]
a.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
a.join("-"); // "1-2-3-4-5"
"1-2-3-4-5".split("-"); // [1, 2, 3, 4, 5]
a.reverse(); // [5, 4, 3, 2, 1]
a.sort(); // [1, 2, 3, 4, 5]
a.sort((a, b) => b - a); // [5, 4, 3, 2, 1]
a.forEach((item) => console.log(item)); // 1 2 3 4 5 (no devuelve nada, es para recorrer)
a.reduce((acc, item) => acc + item, 0); // 15
a.map((item) => item * 2); // [2, 4, 6, 8, 10] (devuelve un nuevo array, actualiza los datos de 'a')
a.filter((item) => item % 2 === 0); // [2, 4]
a.every((item) => item > 2); // false
a.some((item) => item > 0); // true
a.find((item) => item > 2); // 3
a.findIndex((item) => item > 2); // 2
```

## Funciones

Algunas formas de declarar una función son:

```js
// Function declaration
function sum(a, b) {
  return a + b;
}

// Arrow function
const sum = (a, b) => {
  return a + b;
};

const sum = (a, b) => a + b; // Omitir return y llaves si solo hay una línea
```

## Clases

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`);
  }
}

const john = new Person("John", 30);
john.sayHello(); // Hola, me llamo John y tengo 30 años
```

## Promesas

Las promesas son objetos que representan el resultado de una operación asíncrona. Tienen tres estados:

- **Pending**: estado inicial, no se ha cumplido ni rechazado.
- **Fulfilled**: la operación se ha cumplido.
- **Rejected**: la operación ha fallado.

```js
Promise.resolve(1); // Promise {<fulfilled>: 1} -> se cumple
Promise.reject(new Error("Error")); // Promise {<rejected>: Error} -> se rechaza
// Pending -> No se cumple ni se rechaza (se queda en estado pendiente)

// Útil cuando se tienen varias promesas y se quiere que se cumplan todas de forma simultánea
Promise.all([Promise.resolve(1), Promise.resolve(2)]); // Promise {<fulfilled>: [1, 2]}
```

## Fetch Promise

Si recibe respuesta, `then` se ejecuta. Si no, `catch` se ejecuta.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Lo mismo con `try/catch`:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error en la petición");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

## Fetch async/await

Se debe incluir el atributo `async` en la función para poder usar `await`.

```js
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
```

## LocalStorage

LocalStorage es como un mini servidor que se guarda en el navegador. Solo se puede guardar strings. Para guardar objetos, se debe convertir a string con `JSON.stringify()` y para obtenerlos, se debe convertir a objeto con `JSON.parse()`.

```js
localStorage.setItem("name", "John"); // Guardar
localStorage.getItem("name"); // Obtener
localStorage.removeItem("name"); // Eliminar
localStorage.clear(); // Eliminar todo
```

Ejemplo de guardar un objeto:

```js
localStorage.setItem("user", JSON.stringify({ name: "John", age: 30 }));
const user = JSON.parse(localStorage.getItem("user"));
```

## Referencias

- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [W3Schools](https://www.w3schools.com/js/default.asp)

## TODO:

- [x] Añadir tipo de variables
- [x] Añadir funciones
- [x] Añadir fetch
- [x] Añadir localStorage
- [x] Añadir ejemplos de código js
