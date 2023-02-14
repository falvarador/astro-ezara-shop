import { createContext, useContext } from "react";

export function createBlocContext<T>() {
  const blocContext = createContext<T | undefined>(undefined);

  function useBlocContext() {
    const context = useContext(blocContext);

    if (!context) {
      throw new Error("This context must be inside a Provider with a value");
    }

    return context;
  }

  return [blocContext, useBlocContext] as const;
}
