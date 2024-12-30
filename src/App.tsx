import "./App.css";

import { Button, ColorRed, CustomForm } from "./components";
import { GlobalProvider } from "./context/global.provider";

/* Un context es un objeto que se utiliza para compartir información entre
componentes sin tener que pasar props manualmente a través de cada componente.*/

function App() {
  const handleClick = () => {
    alert("Button clicked");
  };

  const sayHello = () => {
    alert("Hello!!!");
  };

  return (
    <GlobalProvider>
      <ColorRed>
        <Button parentMethod={sayHello}>Click me</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>Click me</Button>
      {/* <CustomForm /> */}
    </GlobalProvider>
  );
}

export default App;
