# React ejemplos

**React** es una librería de JavaScript que nos permite crear interfaces de usuario de manera sencilla y rápida.

Se basa en el concepto de **componentes**, que son pequeños trozos de código que se encargan de mostrar una parte de la interfaz de usuario, idealmente reutilizable.

Utiliza renderizado de **estructura virtual**, que es una forma de renderizar elementos de la interfaz de usuario sin tener que modificar el DOM.

Simplifica la sintaxis de **JSX**, que es una extensión de JavaScript que permite escribir código HTML dentro de JavaScript, de manera declarativa.

## Creando un primer proyecto

### Comandos ya configurados

Algunos comandos que crean un proyecto con la estructura de carpetas y archivos necesarios para empezar a trabajar son:
[vite](https://vitejs.dev/guide/)
[react](https://create-react-app.dev/docs/getting-started/)
[nextjs](https://nextjs.org/docs/getting-started)

```bash
$ npx create-react-app my-app
$ npx create vite@latest
$ npx create-next-app@latest
```

Estos comandos crean un proyecto con la estructura de carpetas y archivos necesarios para empezar a trabajar. En el caso de `create-react-app` ya no se utiliza tanto, se recomienda usar `vite@latest` que es más rápido y ligero.

### "Desde 0" [from_scratch](./from_scratch)

Si se quiere crear un proyecto "desde 0" (sin usar `create-react-app` o `vite@latest`), hay una sección [from_scratch](./from_scratch) con las instrucciones, la fuente original corresponde a [este tutorial](https://www.codementor.io/@rajjeet/step-by-step-create-a-react-project-from-scratch-11s9skvnxv).

## Componentes

Los componentes son pequeños trozos de código que se encargan de mostrar una parte de la interfaz de usuario, idealmente reutilizable. Estos componentes deben retornar solo un elemento HTML, pero **pueden tener otros componentes dentro.**

### Componente principal

Suele haber un componente principal que se encarga de renderizar todos los demás componentes.

#### Ejemplo `create-react-app` (./index.js)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### Ejemplo `vite` (./main.jsx)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### Desde esa base, se suelen crear componentes

`(./App.js o ./App.jsx)`

```jsx
import React from "react";

function App() {
  return (
    <div>
      <h1>¡Hola mundo!</h1>
    </div>
  );
}

export default App;
```

> **Note**
> En las versiones más recientes de React, no es necesario importar 'React'

### Crear e importar componentes

Un componente se puede crear de distintas maneras, se suele utilizar una carpeta `/components`

**Export default** es una forma de exportar un componente, que se puede importar con cualquier nombre.

```jsx
// import HelloWorld from './<ruta_hacia_este_componente>';
// o
// import CualquierNombreEsValidoAqui from './<ruta_hacia_este_componente>';
export default function HelloWorld() {
  return <h1>¡Hola mundo!</h1>;
}
```

**Export** es otra forma de exportar un componente, podemos exportar varios componentes en un mismo archivo. Esto último no es tan recomendable, pero se puede hacer.

```jsx
// import { HelloWorld, ByeWorld } from './<ruta_hacia_este_componente>';
export function HelloWorld() {
  return <h1>¡Hola mundo!</h1>;
}
export function ByeWorld() {
  return <h1>¡Chao mundo!</h1>;
}
```

### Existe otra sintáxis para crear los componentes

Esta sintáxis utiliza **arrow functions** y **const** en lugar de **function**. Puedes leer más sobre la diferencia [aquí](https://dev.to/ugglr/react-functional-components-const-vs-function-2kj9)

```jsx
// import HelloWorld from './<ruta_hacia_este_componente>';
const HelloWorld = () => {
  return <h1>¡Hola mundo!</h1>;
};

export default HelloWorld;
```

## Recordar que es JSX

En estricto rigor, estamos retornando contenido **.jsx** (o **.tsx** si se está usando TypeScript), no **.js** ni **html**.

Esto tiene algunos cambios frente a **HTML**, algunos son:

- Los nombres de las etiquetas se escriben en **camelCase**.
- Los atributos se escriben en **camelCase**.
- Los atributos de "style" se pasan como un objeto, no como una cadena de texto.

```jsx
// HTML
<div class="container" style="color: red;"></div>

// JSX
<div className="container" style={{ color: "red" }}></div>
```

## Props

Las **props** son propiedades que se pasan a un componente, son como los atributos de una etiqueta HTML.

Sea una `App` que importa un componente `Description`:

```jsx
import Description from "./components/Description";
function App() {
  return (
    <div>
      <Description
        name="Juan"
        age={20}
        isStudent={true}
        hobbies={["programar", "jugar", "dormir"]}
      />
    </div>
  );
}
```

### Forma 1: props como argumento

El componente `Description` puede recibir las props `name`, `age`, `isStudent` y `hobbies` como `props`:

```jsx
export default function Description(props) {
  return (
    <div>
      <h1>¡Hola {props.name}!</h1>
      <p>Tienes {props.age} años</p>
      <p>{props.isStudent ? "Eres estudiante" : "No eres estudiante"}</p>
      <p>Tus hobbies son:</p>
      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Forma 2 (más común) : props como argumento destructurado

El componente `Description` puede recibir las props `name`, `age`, `isStudent` y `hobbies` como `{ name, age, isStudent, hobbies }`:

```jsx
export default function Description({ name, age, isStudent, hobbies }) {
  return (
    <div>
      <h1>¡Hola {name}!</h1>
      <p>Tienes {age} años</p>
      <p>{isStudent ? "Eres estudiante" : "No eres estudiante"}</p>
      <p>Tus hobbies son:</p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Estados

Los **estados** son variables que se pueden modificar, y que hacen que el componente se vuelva a renderizar. Estos **states** también se pueden pasar como props a otros componentes.

### useState

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
}
```

### useEffect

El **useEffect** actúa como un **listener** de los cambios en el estado. Se puede usar para hacer peticiones a una API, o para generar cambios si nuestra variable de estado cambia.

```jsx
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(
      "El componente se renderizó por primera vez (esto no se vuelve a ejecutar)"
    );
  }, []);

  useEffect(() => {
    console.log("El contador cambió");
  }, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
}
```
