import { createContext, useContext } from "react";

interface GlobalContextType {
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context.value !== 0 && !context.value) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }

  return context;
};
