import { ReactNode, useState } from "react";
import { GlobalContext } from "./global.context";

const EmptyGlobalState: number = 0;

interface GlobalContextProps {
  children: ReactNode;
}

// Creando nuextro provider
export const GlobalProvider = ({ children }: GlobalContextProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState);
  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};