import React, { createContext } from "react";
import useFirebase from "./../hooks/useFirebase";

export const Context = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return <Context.Provider value={allContext}>{children}</Context.Provider>;
};

export default AuthProvider;
