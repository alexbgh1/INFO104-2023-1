# HTML tags y sintáxis

Básicamente **HTML** es un lenguaje de marcado que se utiliza para crear páginas web. HTML es un acrónimo que significa HyperText Markup Language (Lenguaje de Marcado de Hipertexto).

**HTML** no es un lenguaje de programación, sino un lenguaje de marcado. HTML **describe la estructura de una página web** **_semánticamente_** (además de presentarla visualmente) y define el contenido de la página web.

**semánticamente** significa que no solo se enfoca en la presentación, sino que también describe el significado y la estructura del contenido.

## La estructura básica de un documento HTML

De manera general un archivo **HTML** contiene **etiquetas** y **atributos**.

Las **etiquetas** son elementos que definen el contenido de la página web. Las **etiquetas** se componen de una etiqueta de apertura y una etiqueta de cierre.

Los **atributos** son propiedades que se aplican a las etiquetas.

Un documento normal se compone de tres partes:

- **`<html></html>`**: Define el documento HTML y envuelve todo el contenido de la página web.
- **`<head></head>`**: Define información sobre el documento HTML (de manera más "interna")
- **`<body></body>`**: Define el contenido del documento HTML (más visible para el usuario)

```html
<!-- DOCTYPE: define el tipo de documento (versión) -->
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Título de mi página</title>
  </head>
  <body>
    <h1>Mi primer título</h1>
    <p>Mi primer párrafo.</p>
  </body>
</html>
```

## Las etiquetas tienen [atributos](https://www.w3schools.com/html/html_attributes.asp)

Los **atributos** siempre aparecen en la parte de apertura de la **etiqueta** y tienen como propósito proporcionar información adicional sobre el elemento, como el estilo, el tamaño, acción, etc.

Algunas **etiquetas** tienen sus propios atributos, como el atributo `href (Hypertext REFerence)` de la etiqueta `<a></a> (anchor - ancla)` y el atributo `src (source)` de la etiqueta `<img/>`.

```html
<!-- Algunos atributos aplicables a todas las etiquetas -->
<!-- clase: <nombre de la clase> (puede repetirse) -->
<!-- id: <nombre del id> (único) -->
<!-- style: <propiedad: valor; propiedad: valor; ...> -->
<!-- title: <texto> (texto que se muestra al pasar el mouse sobre el elemento) -->
<p class="parrafo" id="id" style="color: red;" title="Título del párrafo">
  Mi primer párrafo.
</p>

<!-- Atributo de link -->
<a href="https://www.w3schools.com">Este es un link.</a>

<!-- Atributo de imagen src: <path/archivo.extension>, alt: "texto alternativo si no carga" -->
<img src=/images/imagen_de_manzana.png alt="Manzana en una mesa" />
```

## Algunos ejemplos de etiquetas HTML ( `<head></head>` )

El apartado [<head></head>](https://www.w3schools.com/html/html_head.asp) es el encargado de definir el título de la página, las etiquetas meta, los enlaces a los archivos externos, etc.

### Etiquetas de título

Las etiquetas de título se utilizan para mostrar el título de la página (que se muestra en la barra de título o pestaña de la página)

```html
<title>Este es el título de la página</title>
```

### Etiquetas de meta

Las etiquetas de meta se utilizan para especificar metadatos sobre el documento HTML.

```html
<!-- Codificación de caracteres -->
<meta charset="UTF-8" />
<!-- Compatibilidad con Internet Explorer -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- Viewport (para dispositivos móviles) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- Descripción de la página -->
<meta name="description" content="Free Web tutorials" />
<!-- Palabras clave para la búsqueda de la página -->
<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
<!-- Autor de la página -->
<meta name="author" content="John Doe" />

<!-- Previsualización de la página -->
<meta property="og:title" content="The Rock" />
<meta property="og:description" content="Dwayne Johnson" />
<meta property="og:image" content="img/the-rock.jpg" />
```

### Etiquetas de enlace

Las etiquetas de enlace se utilizan para especificar enlaces a otros documentos.

```html
<!-- Enlace a un archivo externo CSS (Cascading Style Sheets) -->
<link rel="stylesheet" href="style.css" />
<!-- Enlace a un archivo externo de iconos https://fontawesome.com/ -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<!-- Enlace a un archivo externo de fuentes https://fonts.google.com/specimen/Outfit -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
  rel="stylesheet"
/>
```

## Algunos ejemplos de etiquetas HTML ( `<body></body>` )

El apartado **<body></body>** es el encargado de definir el contenido de la página web.

### Etiquetas de encabezado

Las etiquetas de encabezado se utilizan para mostrar títulos y subtítulos. Hay seis etiquetas de encabezado, `<h1>` es el encabezado más grande y `<h6>` es el más pequeño. Usualmente solo hay un encabezado `<h1>` por página.

```html
<h1>Este es un encabezado de nivel 1</h1>
<h2>Este es un encabezado de nivel 2</h2>
<h3>Este es un encabezado de nivel 3</h3>
<h4>Este es un encabezado de nivel 4</h4>
<h5>Este es un encabezado de nivel 5</h5>
<h6>Este es un encabezado de nivel 6</h6>
```

### Etiquetas de párrafo

Las etiquetas de párrafo se utilizan para mostrar párrafos de texto.

```html
<p>Este es un párrafo.</p>
<p>Este es un párrafo y <span>esto un span</span></p>
<small>Este es un párrafo pequeño.</small>
<strong>Este es un párrafo en negrita muy importante.</strong>
<b>Este es un párrafo en negrita.</b>
<em>Este es un párrafo en cursiva.</em>
<mark>Este es un párrafo resaltado.</mark>

(Salto de línea)
<br />

(Línea horizontal)
<hr />
```

### Etiquetas de enlace

Las etiquetas de enlace se utilizan para mostrar enlaces a otros documentos.

```html
<a href="https://www.w3schools.com/tags/">Este es un enlace a W3Schools</a>
<a href="https://www.w3schools.com/tags/" target="_blank"
  >Este es un enlace a W3Schools en una nueva pestaña</a
>
```

### Etiquetas de imágen

Las etqiuetas de imágen se utilizan para mostrar imágenes.

```html
<!-- Imágen estándar  -->
<img
  src="https://www.w3schools.com/images/w3schools_green.jpg"
  alt="W3Schools.com"
  width="104"
  height="142"
/>

<!-- Imágen "dinámica" (en este caso según el tamaño) -->
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)" />
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)" />
  <img src="img_flowers.jpg" alt="Flowers" style="width:auto;" />
</picture>

<!-- Imágen SVG ( Scalable Vector Graphics ) -->
<svg width="100" height="100">
  <circle
    cx="50"
    cy="50"
    r="40"
    stroke="green"
    stroke-width="4"
    fill="yellow"
  />
  Sorry, your browser does not support inline SVG.
</svg>
```

### Etiquetas de video

Las etiquetas de video se utilizan para mostrar videos :o .

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

### Etiquetas de lista

Las etiquetas de lista se utilizan para mostrar listas de elementos.

```html
<!-- Lista no ordenada -->
<ul>
    <li>Manzana</li>
    <li>Naranja</li>
    <li>Plátano</li>
</ul>

<!-- Lista ordenada ( numerada ) -->

<ol>
    <li>Manzana</li>
    <li>Naranja</li>
    <li>Plátano</li>
</ol>

<!-- Lista de definición -->
<dl>
    <dt>Manzana</dt>
    <dd>Es una fruta roja.</dd>
    <dt>Naranja</dt>
    <dd>Es una fruta naranja.</dd>
    <dt>Plátano</dt>
    <dd>Es una fruta amarilla.</dd>
</dl>
```

### Etiquetas de tabla

Las etiquetas de tabla se utilizan para mostrar tablas de datos.

```html
<!-- tr = table row -->
<!-- th = table header -->
<!-- td = table data -->
<!-- caption = table subtitle -->
<table>
  <caption>
    Tabla de ejemplo
  </caption>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>25</td>
  </tr>
</table>
```

### Etiquetas de formulario

Las etiquetas de formulario se utilizan para crear formularios de entrada de datos.

```html
<!-- Formulario -->
<form>
  <!-- Conjuto de campos formulario -->
  <fieldset>
    <legend>Información personal:</legend>
    <label for="name">Nombre:</label>
    <!-- "for" apunta al id -->
    <input type="text" id="name" name="name" value="John" />
  </fieldset>
</form>
```

### Etiquetas de input

Las etiquetas de input se utilizan normalmente dentro de los formularios, existen distintos tipos.

````html
<!-- Input de texto (string) -->
<input type="text" value="Un texto cualquiera" />

<!-- Input de número -->
<input type="number" min="1" max="10" value="123" />

<!-- Input de fecha -->
<input
  type="date"
  id="start"
  name="trip-start"
  value="2023-01-09"
  min="2023-03-09"
  max="2023-03-09"
/>

<!-- Input de hora -->
<input type="time" id="fecha" name="fecha" min="09:00" max="18:00" required />

<!-- Input de color -->
<input type="color" />

<!-- Input de rango -->
<input type="range" />

<!-- Input de teléfono -->
<input type="tel" />

<!-- Input de email con regex -->
<input
  type="text"
  pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
  required
/>

<!-- Input de contraseña -->
<input type="password" />

<!-- Input de selección (tipo alternativas) -->
<input type="radio" id="A" name="cuestionario-1" />
<input type="radio" id="B" name="cuestionario-1" />

<!-- Input de selección (más de una opción) -->
<input type="checkbox" value="A" />
<input type="checkbox" value="B" />

<!-- Input de subir archivo -->
<input type="file" accept="image/png, image/jpeg" />

<!-- Input de entrega (Suele ir al final de un <form></form> para "entregar/subir" las respuestas -->
<input type="submit" />
``` ### Etiquetas de select, option y optgroup, textarea, button... Existen
otras etiquetas que se utilizan dentro de los formularios, como por ejemplo:
```html
<!-- Select -->
<select>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>

<!-- Select con optgroup -->
<select>
  <optgroup label="Grupo 1">
    <option value="A">A</option>
    <option value="B">B</option>
  </optgroup>
  <optgroup label="Grupo 2">
    <option value="C">C</option>
    <option value="D">D</option>
  </optgroup>
</select>

<!-- Textarea -->
<textarea name="message" rows="10" cols="30">
Escribe aquí tu mensaje...</textarea
>

<!-- Button -->
<button>Botón</button>
````

### Etiquetas de estructura o contenedores

Las etiquetas de estructura o contenedores se utilizan para definir la estructura de la página web. Dentro de estos suelen ir los elementos de la página web.

```html
<!-- Es el contendor más general/genérico de una página web -->
<div>
  <h1>Este es un encabezado de nivel 1</h1>
  <p>Este es un párrafo.</p>
</div>

<!-- Es el contenedor principal de una página web -->
<main>
  <h1>Este es un encabezado de nivel 1</h1>
  <p>Este es un párrafo.</p>
</main>

<!-- Es el contenedor de una sección de una página web -->
<section>
  <h2>Este es un encabezado de nivel 2</h2>
  <p>Este es un párrafo.</p>
</section>

<!-- Es el contenedor de un artículo de una página web (idealmente si es algo que se repite) -->
<article>
  <h2>Este es un encabezado de nivel 2</h2>
  <p>Este es un párrafo.</p>
</article>

<!-- Es el contenedor de un pie de página de una página web -->
<footer>
  <p>Este es un párrafo.</p>
</footer>

<!-- Es el contenedor de un encabezado, ya sea de un artículo, o barra de navegación -->
<header>
  <h2>Este es un encabezado de nivel 2</h2>
  <p>Este es un párrafo.</p>
</header>

<!-- Es el contenedor usualmente para la navegación de una página web -->
<nav>
  <a href="/html/">HTML</a> | <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>

<!-- Es el contenedor de un elemento que está a un lado -->
<aside>
  <h1>Este es un encabezado de nivel 1</h1>
  <p>Este es un párrafo.</p>
</aside>
```

Entre estos contenedores salvo por **`<main></main>`** generalmente se pueden repetir más de una vez, se relacionan más a la **semántica** (significado) que le damos.

Entonces por ejemplo, uno esperaría "un contenido principal" (**`<main></main>`**), pero podría tener 2 **`<nav></nav>`** uno en la parte superior y otro en la parte inferior de la página, o muchos **`<div></div>`** que es el más genérico de todos.

## Referencias

- [W3Schools - HTML](https://www.w3schools.com/html/)
- [MDN - HTML](https://developer.mozilla.org/es/docs/Web/HTML)

## TODO:

- [x] Añadir significado etiquetas
- [x] Añadir significado atributos
- [x] Añadir las fuentes de información
- [x] Añadir ejemplos de código html
