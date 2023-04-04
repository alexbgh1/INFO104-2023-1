const data = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mary", age: 28 },
  { name: "John", age: 21 },
];

// Filter: Filtrar elementos de un arreglo
// Devuelve un nuevo arreglo con los elementos que cumplan con la condición
// ej:
const mayoresDe28 = data.filter((persona) => {
  return persona.age > 28;
  // Si no hay elementos que cumplan la condición: []
});
console.log(mayoresDe28);

// Map: Transformar los elementos de un arreglo
// Devuelve un nuevo arreglo con los elementos transformados
// ej:

const nombres = data.map((persona) => {
  return persona.name;
  // Si solo es "return": da un arreglo de undefined
});
console.log(nombres);

// forEach: Iterar los elementos de un arreglo
// No devuelve nada
// ej:

data.forEach((persona) => {
  console.log(persona.name);
});

// Find: Devuelve el primer elemento que cumpla con la condición
// ej:

const john = data.find((persona) => {
  return persona.name === "John";
  // Si hay más de uno, devuelve el priemro.
  // Si no lo encuentra: undefined
});

console.log(john);

// FindIndex: Devuelve el índice del primer elemento que cumpla con la condición
// ej:

const indexJohn = data.findIndex((persona) => {
  return persona.name === "John";
  // Si hay más de uno, devuelve el priemro.
  // Si no lo encuentra: -1
});

console.log(indexJohn);

// Some: Devuelve true si al menos un elemento cumple con la condición
// ej:

const hayMayoresDe28 = data.some((persona) => {
  return persona.age > 28;
  // Si hay al menos uno que cumpla: true
  // Si no hay ninguno que cumpla: false
});

console.log(hayMayoresDe28);

// Every: Devuelve true si todos los elementos cumplen con la condición

const todosMayoresDe28 = data.every((persona) => {
  return persona.age > 28;
  // Si todos cumplen: true
  // Si no todos cumplen: false
});

console.log(todosMayoresDe28);

// Reduce: Devuelve un valor único
// ej:

// reduce((total, actual) => {<<código>>}, valorInicial)
const totalEdades = data.reduce((total, persona) => {
  return total + persona.age;
  // Si no hay elementos: 0
}, 0);

console.log(totalEdades);

// Sort: Ordena los elementos de un arreglo
// ej: Definimos un orden en base a la edad

const dataOrdenada = data.sort((a, b) => {
  return a.age - b.age;
  // Si no hay elementos: []
});

console.log(dataOrdenada);

// Reverse: Invierte el orden de los elementos de un arreglo
// ej:

const dataInvertida = data.reverse();
console.log(dataInvertida);

// Concat: Une dos arreglos
// ej:

const data2 = [
  { name: "Pepe", age: 25 },
  { name: "Pepa", age: 26 },
];

const data3 = data.concat(data2);
console.log(data3);

// Includes: Devuelve true si el elemento existe en el arreglo
// ej:

const hayJohn = data.includes({ name: "John", age: 25 });
console.log(hayJohn);

// indexOf: Devuelve el índice del elemento si existe en el arreglo
// ej:

const indexJane = data.indexOf({ name: "Jane", age: 30 });
console.log(indexJane);

/* EXTRAS */

// join: Une los elementos de un arreglo en un string
// ej:

const nombresString = nombres.join(", ");
console.log(nombresString); // ['John', 'Jane', 'Mary', 'John'] -> John, Jane, Mary, John

// split: Divide un string en un arreglo
// ej:

const nombresArray = nombresString.split(", ");
console.log(nombresArray); // John, Jane, Mary, John -> ["John", "Jane", "Mary", "John"]

// slice: Devuelve un nuevo arreglo con los elementos seleccionados
// ej:

const dataSlice = data.slice(1, 3);
console.log(dataSlice); // [ { name: 'Mary', age: 28 }, { name: 'John', age: 25 } ]

// splice: Elimina elementos de un arreglo
// ej:

const dataSplice = data.splice(1, 2);
console.log(data); // [ { name: 'Jane', age: 30 }, { name: 'John', age: 21 } ]
console.log(dataSplice); // [ { name: 'Mary', age: 28 }, { name: 'John', age: 25 } ]

// push: Agrega un elemento al final del arreglo
// ej:

const dataPush = data.push({ name: "Pepe", age: 25 });
console.log(data); // [ { name: 'Jane', age: 30 }, { name: 'Jane', age: 21 }, { name: 'Pepe', age: 25 } ]
console.log(dataPush); // 3

// pop: Elimina el último elemento del arreglo
// ej:

const dataPop = data.pop();
console.log(data); // [ { name: 'Jane', age: 30 }, { name: 'Jane', age: 21 } ]
console.log(dataPop); // { name: 'Pepe', age: 25 }

// shift: Elimina el primer elemento del arreglo
// ej:

const dataShift = data.shift();
console.log(data); // [ { name: 'John', age: 21 } ]
console.log(dataShift); // { name: 'Jane', age: 30 }

// unshift: Agrega un elemento al inicio del arreglo
// ej:

const dataUnshift = data.unshift({ name: "Pepe", age: 25 });
console.log(data); // [ { name: 'Pepe', age: 25 }, { name: 'John', age: 21 } ]
console.log(dataUnshift); // 2

// toString: Convierte un arreglo en un string
// ej:

const dataToString = data.toString();
