import { createContext, useContext } from "react";

export function createPlocContext<T>() {
  const plocContext = createContext<T | undefined>(undefined);

  function usePlocContext() {
    const context = useContext(plocContext);

    if (!context) {
      throw new Error("This context must be inside a Provider with a value");
    }

    return context;
  }

  return [plocContext, usePlocContext] as const;
}
