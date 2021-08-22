import React, { useState } from "react";

export const Context = React.createContext();

const Store = ({ children }) => {
  const [loadingState, setLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);

  return (
    <Context.Provider
      value={{
        loadingState: [loadingState, setLoadingState],
        errorState: [errorState, setErrorState],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
