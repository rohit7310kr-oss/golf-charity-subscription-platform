import { React, createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

export const UserProvider = function ({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, []);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
