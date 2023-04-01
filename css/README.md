# CSS (Cascading Style Sheets)

El **CSS** como su nombre lo dice, nos permite darle estilo a nuestros documentos **HTML**. Es decir, nos permite darle color, tamaño, posición, etc. a los elementos de nuestros documentos **HTML**.

Para visualizar el **HTML** y el **CSS** siempre podemos presionar **F12** en nuestro navegador, y veremos el código **HTML** y el código **CSS**. Arriba abrá un mouse que nos permite seleccionar el elemento que queremos ver (cerca de "Elements").

## ¿Cómo funciona?

El **CSS** funciona de la siguiente manera:

1. Seleccionamos un elemento de nuestro documento **HTML**.
2. Definimos un estilo (propiedades) para ese elemento.

Es importante el uso de `;` al final de cada propiedad. Además de la apertura y cierre de llaves `{}`.

## Sintaxis

La sintaxis del **CSS** es la siguiente:

```css
/* Para una etiqueta */
selector {
  propiedad: valor;
}

/* Para una Clase */
.selector {
  propiedad: valor;
}

/* Para un ID */
#selector {
  propiedad: valor;
}
```

## Selectores

Los selectores son los elementos que seleccionamos de nuestro documento **HTML**. Por ejemplo, si queremos darle un color de fondo a un elemento `div`, bastará con seleccionar ese elemento `div` y definir el estilo.

```css
div {
  background-color: red;
}
```

### Tipos de selectores

Existen varios tipos de selectores, los más comunes son:

#### 1. Selectores de tipo

Los **selectores de tipo** son los selectores que seleccionan un elemento por su tipo. Por ejemplo, si queremos darle un color de fondo a **cada elemento `div`**, bastará con seleccionar ese elemento `div` y definir el estilo.

```css
div {
  background-color: red;
}
```

#### 2. Selectores de clase

Los **selectores de clase** son los selectores que seleccionan un elemento por su clase. Por ejemplo, si queremos darle un color de fondo a un elemento `div` que tenga la clase `container`, bastará con seleccionar ese elemento `container` y definir el estilo.

```html
<div class="container"></div>
```

```css
.container {
  background-color: red;
}
```

#### 3. Selectores de ID

Los **selectores de ID** son los selectores que seleccionan un elemento por su ID. Por ejemplo, si queremos darle un color de fondo a un elemento `div` que tenga el ID `container`, bastará con seleccionar ese elemento `div` y definir el estilo.

```css
#container {
  background-color: red;
}
```

#### 4. Selectores de atributo

Los **selectores de atributo** son los selectores que seleccionan un elemento por un atributo que tenga. Por ejemplo, si queremos darle un color de fondo a un elemento `input` que tenga el atributo `[type="text"]`, bastará con seleccionar ese elemento `input` y definir el estilo.

```css
input[type="text"] {
  background-color: red;
}
```

Otros ejemplos son: `[type="email"]`, `[type="password"]`, `[type="number"]`, `[type="date"]`, etc.

#### 5. Selectores de pseudo-clase

Los **selectores de pseudo-clase** son los selectores que seleccionan un elemento por su estado. Por ejemplo, si queremos darle un color de fondo a un elemento `div` **cuando el usuario pase el mouse por encima**, bastará con seleccionar ese elemento `div` y definir el estilo.

```css
div:hover {
  background-color: red;
}
```

Otros ejemplos son: `:active`, `:focus`, `:visited`, `:first-child`, `:last-child`, etc.

#### 6. Selectores de pseudo-elemento

Los **selectores de pseudo-elemento** son los selectores que seleccionan un elemento por un elemento interno. Por ejemplo, si queremos añadir un texto antes de un elemento `p`, bastará con seleccionar ese elemento `p::before` y definir el estilo.

```css
p::before {
  content: "Texto";
}
```

Otros ejemplos son: `::after`, `::first-letter`, `::first-line`, etc.

## Propiedades

Las propiedades son las características que queremos darle a nuestros elementos. Varias propiedades son: `background-color`, `color`, `font-size`, `width`, `height`, etc.

Estas propiedades dependerán del elemento que queramos darle estilo. Por ejemplo, se esperaría que el elemento `div` tenga una propiedad `background-color` y no una propiedad `color`, ya que el elemento `div` es un elemento de bloque y no un elemento de línea.

`background-color`: Color de fondo del elemento.

`color`: Color del texto del elemento.

**Algunos ejemplos:**

```css
/* Ejemplo de un botón feo */
.my-button {
  background-color: red;
  color: white;
  font-size: 16px;
  width: 100px;
  height: 50px;
  margin: 15px;
  padding: 15px;
  border: 1px solid black;
  cursor: pointer;
}

.my-button:hover {
  background-color: blue;
}

/* Ejemplo para un párrafo */
.my-paragraph {
  color: black;
  font-size: 16px;
  font-family: system-ui;
  text-align: center;
}

/* Ejemplo para un div (esto hace un cuadrado verde) */
.my-div {
  background-color: green;
  width: 100px;
  height: 100px;
}
```

## [Combinadores](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Selectors/Combinators#selector_de_descendientes)

<<<<<<< HEAD
Los **combinadores** son los selectores que nos permiten seleccionar elementos que cumplan una condición. Por ejemplo, si queremos darle un color de fondo a un elemento `div` que tenga la clase `container` y que a su vez tenga un elemento `p`, bastará con seleccionar ese elemento `.container p` y definir el estilo.
=======
Los **combinadores** son los selectores que nos permiten seleccionar elementos que cumplan una condición. Por ejemplo, si queremos darle un color de fondo a un elemento `div` que tenga la clase `container` y que a su vez tenga un elemento `p`, bastará con seleccionar ese elemento `p` y definir el estilo.
>>>>>>> 455a3208846ea5e526c4ef4b69f946b0fb96dd71

```html
<div class="container">
  <p>Texto</p>
</div>
```

```css
.container p {
  background-color: red;
}
```

Otros ejemplos son: `>`, `+`, `~`, etc.

## [Media queries](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)

Los media queries se enfocan en la **adaptabilidad** de nuestra página web. Es decir, nos permiten adaptar nuestra página web a diferentes dispositivos. Usualmente se consideran tres tipos de dispositivos: **escritorio**, **tableta** y **móvil**.

Una metodología es **"mobile first"** que consiste en diseñar la página web para móviles y luego adaptarla para escritorio y tabletas. Otra metodología es **"desktop first"** que consiste en diseñar la página web para escritorio y luego adaptarla para móviles y tabletas.

### 1. Mobile first

```css
/* Mobile first */
@media (min-width: 768px) {
  /* Estilos para tabletas */
}

@media (min-width: 1024px) {
  /* Estilos para escritorio */
}
```

### 2. Desktop first

```css
/* Desktop first */
@media (max-width: 1024px) {
  /* Estilos para tabletas */
}

@media (max-width: 768px) {
  /* Estilos para móviles */
}
```

### 3. Otros ejemplos

```css
@media (prefers-color-scheme: dark) {
  /* Estilos para modo oscuro */
}

@media (prefers-color-scheme: light) {
  /* Estilos para modo claro */
}
```

## [Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

**Flexbox** es un modelo de diseño que nos permite organizar los elementos de una manera más sencilla. **Flexbox** nos permite organizar los elementos en filas o columnas. Además, nos permite alinear los elementos en el eje principal y en el eje transversal.

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```

## [Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)

**Grid** es un modelo de diseño que nos permite organizar los elementos de una manera más sencilla. **Grid** nos permite organizar los elementos en filas y columnas. Es bastante similar a **Flexbox**, pero nos permite organizar los elementos con cierta estructura.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
```

<<<<<<< HEAD
## [Display](https://developer.mozilla.org/es/docs/Web/CSS/display)

El **display** es una propiedad que nos permite definir el tipo de elemento que queremos. Por ejemplo, si queremos que un elemento sea un elemento de bloque, bastará con definir el **display** como `block`. Si queremos que un elemento sea un elemento de línea, bastará con definir el **display** como `inline`.

```css
/* Elemento de bloque */
.block {
  display: block;
}

/* Elemento de línea */
.inline {
  display: inline;
}

/* Elemento none ('desaparece') */
.none {
  display: none;
}

/* Elemento de tabla */
.table {
  display: table;
}

/* flex, grid, ... y muchos más */
```

## [Padding,](https://developer.mozilla.org/es/docs/Web/CSS/padding) [margin](https://developer.mozilla.org/es/docs/Web/CSS/margin) y [border](https://developer.mozilla.org/es/docs/Web/CSS/border)

El **padding** es el espacio que hay entre el contenido y el borde. El **margin** es el espacio que hay entre el "borde" y el elemento vecino. El **border** es el borde del elemento.

Generalmente se abrevian las propiedades, siempre empieza desde arriba y va en sentido de las manecillas del reloj.

`padding: 5px` (top, right, bottom, left)
`padding: 5px 10px` (top/bottom, right/left)
`padding: 5px 10px 15px 0px` (top, right, bottom, left)
`margin: 5px` (top, right, bottom, left)
`border: 1px solid black` (grosor, tipo de borde, color)

```css
/* Padding */
.padding {
  padding: 10px;
  padding-top: 10px; /* También se puede definir de esta manera para un lado */
}

/* Margin */
.margin {
  margin: 10px;
}

/* Border */
.border {
  border: 1px solid black;
}
```

=======
>>>>>>> 455a3208846ea5e526c4ef4b69f946b0fb96dd71
## Herramientas para CSS

Existen varias herramientas que nos permiten escribir **CSS** de una manera más sencilla y rápida. Estas herramientas son:

### 1. [Normalize.css](https://necolas.github.io/normalize.css/)

**Normalize.css** es un archivo **CSS** que nos permite normalizar los estilos de los navegadores. Es decir, nos permite que los estilos de los navegadores sean los mismos. Por ejemplo, si en un navegador un elemento tiene un margen de 10px y en otro navegador el mismo elemento tiene un margen de 20px, con **Normalize.css** podemos hacer que ambos elementos tengan un margen de 10px.

Bastará con incluir el archivo **normalize.css** en nuestro documento **HTML**.

```html
<link rel="stylesheet" href="css/normalize.css" />
```

### 2. [Bootstrap](https://getbootstrap.com/)

**Bootstrap** es un framework CSS, son una serie de clases **CSS** ya definidas, ya sea para elementos enteros o "shortcuts" para definir estilos de manera más rápida. Por ejemplo, si queremos utilizar un botón ya definido por **Bootstrap**, bastará con incluir la clase `btn` en nuestro elemento `button`.

```html
<button type="button" class="btn btn-primary">Button with Primary Color</button>
```

### 3. [Tailwind CSS](https://tailwindcss.com/)

**Tailwind CSS** es un framework CSS, son una serie de clases **CSS** ya definidas, se centra en clases utilitarias, es decir, clases que nos permiten darle un estilo a un elemento de manera rápida. A diferencia de **Bootstrap**, **Tailwind CSS** no tiene componentes predefinidos, es decir, no tiene botones, formularios, etc. predefinidos.

Esta es una opción "más moderna" o que ha tomado fuerza en los últimos años, ya que nos permite definir estilos de manera más rápida y sencilla, a pesar de que pueda parecer más caótico.

```html
<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Button
</button>
```

### 4. [SASS](https://sass-lang.com/)

**SASS** es un preprocesador de **CSS**, es decir, nos permite escribir **CSS** de una manera más sencilla y rápida. Por ejemplo, podemos definir variables, funciones, etc. para reutilizarlas en nuestro código. O bien anidar estilos, es decir, definir estilos de un elemento dentro de otro elemento.

Ejemplo de un botón con **SASS**:

```scss
$primary-color: #3490dc;
$primary-color-hover: #2779bd;

.btn {
  background-color: $primary-color;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: $primary-color-hover;
  }
}
```

## Referencias

- [W3Schools - HTML](https://www.w3schools.com/css/)
- [MDN - HTML](https://developer.mozilla.org/es/docs/Web/css)

## TODO:

- [x] Añadir selectores
- [x] Añadir propiedades
- [x] Añadir herramientas
- [x] Añadir ejemplos de código css
