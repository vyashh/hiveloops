import React, { useState } from "react";

export const Context = React.createContext();

const Store = ({ children }) => {
  const [loadingState, setLoadingState] = useState(false);
  return (
    <Context.Provider
      value={{
        loadingState: [loadingState, setLoadingState],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
