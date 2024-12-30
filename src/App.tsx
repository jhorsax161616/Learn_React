import "./App.css";

import { BookReader, FocusInput } from "./components";

/* Un context es un objeto que se utiliza para compartir información entre
componentes sin tener que pasar props manualmente a través de cada componente.*/

function App() {
  return (
    <>
      <BookReader />;
      <FocusInput />;
    </>
  );
}

export default App;
