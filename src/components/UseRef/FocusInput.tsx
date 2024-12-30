import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef.current) {
      console.log("No hay referencia al elemento input");
      return;
    }
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Esribe algo..."/>
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
