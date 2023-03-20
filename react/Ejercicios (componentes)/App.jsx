// Suponga que App.jsx es el componente principal de su aplicación

import MiPrimerComponente from "./1/MiPrimerComponente.jsx";
import Contador from "./2/Contador.jsx";
import Fetch from "./3/Fetch.jsx";

const App = () => {
  return (
    <div>
      <MiPrimerComponente />
      <Contador />
      <Fetch />
    </div>
  );
};

export default App;
