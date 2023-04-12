# [Next js](https://nextjs.org/docs)

**Next js** es un framework de **React** que nos facilita el enrutado (ej: "/", "/about", "nosotros"), entre otras acciones referentes al desempeño, como separar la carga entre servidor y cliente.

## Instalación

Requeriremos tener instalado **Node.js** y **npm**. Para instalar **Next js** se puede usar el comando:

```bash
npx create-next-app@latest
```

**Ejecución**

```bash
npm run dev
```

## Sobre Next js

### Enrutado

**Next js** nos facilita el enrutado, para ello debemos crear un archivo en la carpeta **pages** con el nombre del enrutado, por ejemplo:

```bash
pages
├─── about.js
├─── index.js
└────nosotros
        └─── index.js

```

**Ejemplo de crear página**

`pages/about.js` -> `<dominio>/about`

```jsx
export default function About() {
  return <h1>About</h1>;
}
```

**Es equivalente a tener una carpeta con un archivo index.js**

`pages/nosotros/index.js` -> `<dominio>/nosotros`

```jsx
export default function Nosotros() {
  return <h1>Nosotros</h1>;
}
```

### Estilos

**Next js** nos facilita el uso de estilos **(escalabilidad)**, para ello debemos crear un archivo en la carpeta **styles** con el nombre del enrutado, por ejemplo:

```bash
styles
├── about.module.css
├── index.module.css
└── nosotros.module.css
```

**Importar estilos y usar estilos**

La razón de usar **.module.css** es para que no haya conflictos con otros estilos, y se pueda usar el mismo nombre de clase en diferentes archivos. Por poner un ejemplo, se vería como `class: "index_container__3QX7e"`, le añade una especie de hash para que no haya conflictos.

```jsx
import styles from "../styles/Home.module.css";

return (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Bienvenido a <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>
  </div>
);
```

### Importar Image y Link

**Next js** nos facilita el uso de imágenes y enlaces, para ello debemos importarlos de la siguiente manera:

```jsx
import Image from "next/image";
import Link from "next/link";
```

**Ejemplo de uso**

```jsx
<Link href="/">Home</Link>
```

Debemos utilizar **Link** porque es más rápido que el enlace normal, ya que no recarga la página (parte de **Next js**).

```jsx
<Image
  src="/images/profile.jpg"
  alt="Picture of the author"
  width={500}
  height={500}
/>
```

Debemos utilizar **Image** porque tiene optimizaciones en la carga (caché) y las calidades de las imágenes, así como los formatos (**.avif, .webp, .jpeg, .png**).

## [Presentación en Canvas Next js 13 (beta)](https://www.canva.com/design/DAFenDtvALs/0jRdMmXBf2ILNIf2OjHUIw/edit?utm_content=DAFenDtvALs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

En la presentación se explica **Next js 13 (beta)**, no se usará pero se está desarrollando desde hace unos meses, y es posible que sean cambios que apliquen en el futuro.
