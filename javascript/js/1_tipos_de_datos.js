// Ejemplos de tipos de datos en JavaScript
// Notar que no hay un tipado fuerte como lo sería Typescript, o como en
// otros lenguajes como Java, C#, etc.

// Tipos de datos primitivos
let nombre = "Juan"; // String
let edad = 30; // Number
let esProgramador = true; // Boolean
let fechaNacimiento = new Date(); // Date
let simbolo = Symbol(); // Symbol
let nulo = null; // Null
let indefinido = undefined; // Undefined

// Tipos de datos complejos
let arreglo = [1, 2, 3, 4, 5]; // Array
let persona = {
  nombre: "Juan",
  edad: 30,
  esProgramador: true,
  fechaNacimiento: new Date(),
  [simbolo]: "Mi simbolo",
  nulo: null,
  indefinido: undefined,
}; // Object

// Podemos declarar utilizando var,let y const
// var: variable global
// let: variable local
// const: variable constante

// Generalmente se utiliza let y const para no ocasionar problemas de scope
// en React se utiliza mucho más const que let.

// Diferencia var, let y const
var nombreVar = "Juan"; // Variable global
let nombreLet = "Juan"; // Variable local
const nombreConst = "Juan"; // Variable constante

// Ejemplo de scope de problemas var y let
function example() {
  var x = 10;
  if (true) {
    var x = 20; // el alcance de x se extiende al bloque de código completo
    let y = 30; // el alcance de y solo existe dentro de este bloque de código
    console.log(x); // output: 20
    console.log(y); // output: 30
  }
  console.log(x); // output: 20 -> Notar que no es 10
  console.log(y); // Error: Uncaught ReferenceError: y is not defined
}

example();
