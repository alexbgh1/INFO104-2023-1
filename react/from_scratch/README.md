# Instrucciones para crear proyecto React de 0

Inicializamos el proyecto con **npm** (node pack manager), esto nos creará un archivo **package.json** que contendrá la información del proyecto, scripts y las dependencias que se instalen.

## Inicializar proyecto npm

Inicializamos el proyecto con **npm** (node pack manager), esto nos creará un archivo **package.json** que contendrá la información del proyecto, scripts y las dependencias que se instalen.

```bash
npm init --y
```

## Instalamos dependencias

Instalamos las dependencias necesarias para el proyecto.

<details>
  <summary>
    Dependencias
  </summary>
  <b>react:</b> Librería de UI (user interface) para crear componentes modulares.
  </b>react-dom:</b> Nos permite renderizar React dentro del navegador DOM.
  </b>webpack:</b> Paquete que convierte el código para la puesta a producción.
  </b>webpack-cli:</b> Permite a webpack trabajar con comandos CLI (command-line interface)
  </b>webpack-dev-server:</b> Transforma nuestro código fuente y lo sirve en un servidor web mientras lo desarrollamos continuamente. Esto ayuda a ver la salida de su código en el navegador.
  </b>html-webpack-plugin:</b> Una extensión para webpack que añade el index básico html.
  </b>@babel/core:</b> un transcompilador de JavaScript para convertir JavaScript moderno en una versión lista para producción que es compatible con todos los navegadores.
  </b>babel-loader:</b> Conecta Babel al proceso de 'build' de webpack
  </b>@babel/preset-env:</b> gGrupo de complementos de Babel de uso común agrupados en un ajuste preestablecido que convierte las características modernas de JavaScript en una sintaxis ampliamente compatible
  </b>@babel/preset-react:</b> React-specific Babel plugin que convierte la sintáxis JSX en un Javascript antiguo plano que los buscadores entienden

Nota rápida: --save-dev flag es para particionar dependencias en dependencias específicas de desarrollo, luego no van incluidas en producción

</details>

```bash
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react
```

## Creamos archivos de configuración

```bash
touch webpack.config.js
mkdir src
cd src
touch index.js
touch index.html
```

> **Note** > **touch** sirve para crear archivos, **mkdir** para crear directorios (carpetas).

### Estructura hasta el momento

my-app/
├─ node_modules/
├─ src/
│ ├─ index.html
│ ├─ index.js
├─ package-lock.json
├─ package.json
├─ webpack.config.js
├─ README.md

### Contenido archivos

#### webpack.config.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: "development",
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    // the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, "dist"),
    // the filename of the JS bundle will be bundle.js
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: "babel-loader",
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
```

#### src/index.html

```html
<html>
  <head>
    <title>Hello world App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

#### src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello world React!</h1>, document.getElementById("root"));
```

#### package.json

```json
    ...
  "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
  ...
```

De esta forma podemos ejecutar el código como si estuviera en producción con el comando `npm run build` y como si estuviera en desarrollo con el comando `npm start`.

## Fuente

https://www.codementor.io/@rajjeet/step-by-step-create-a-react-project-from-scratch-11s9skvnxv
