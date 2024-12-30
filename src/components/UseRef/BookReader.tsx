// Los UseRef nos permite crear una referencia mutable
// que persiste durante todo el ciclo de vida del componente.
// sin causar un nuevo renderizado cuando se actualiza (re-render)
// También se puede utilizar para acceder al DOM directamente.

import { useRef } from "react";

export const BookReader = () => {
  const currentPage = useRef<number>(1);

  const nextPage = () => {
    currentPage.current += 1;
    console.log(`Estas en la página ${currentPage.current}`);
  };

  const previewPage = () => {
    if (currentPage.current === 1) {
      console.log("No puedes retroceder más");
      return;
    }

    currentPage.current -= 1;
    console.log(`Estas en la página ${currentPage.current}`);
  };

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log("No puedes ir a una página menor a 1");
      return;
    }
    currentPage.current = page;
    console.log(`Saltaste a la página ${currentPage.current}`);
  };

  return (
    <div>
      <h2>Book Reader</h2>
      <p>Página actual: {currentPage.current}</p>
      <button onClick={previewPage}>Página anterior</button>
      <button onClick={nextPage}>Página siguiente</button>
      <button onClick={() => goToPage(50)}>Ir a la página 50</button>
    </div>
  );
};
