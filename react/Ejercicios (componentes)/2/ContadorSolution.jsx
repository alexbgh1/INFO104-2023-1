// Importamos { useState } de "react"
import { useState } from "react";

// Creamos un componente llamado ContadorSolution
const ContadorSolution = () => {
  // Creamos un estado llamado contador que inicia en 0
  const [contador, setContador] = useState(0);

  // Creamos una función que incrementa el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Creamos una función que decrementa el contador
  const decrementar = () => {
    setContador(contador - 1);
  };

  // Retornamos el componente
  return (
    <div>
      <h1>Contador</h1>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      {/* También podría ser utilizando "Arrow Function" -- () => {} -- */}
      {/* <button* onClick= {() => setContador(contador + 1)}>Incrementar</button*/}
    </div>
  );
};

export default ContadorSolution;
