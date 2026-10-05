"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {}
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
export default LoadingContext;
