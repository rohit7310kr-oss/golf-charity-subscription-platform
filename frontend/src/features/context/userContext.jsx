import { React, createContext, useContext, useEffect, useState } from "react";
import { getUserAPI } from "../user/services/userAPI";

const userContext = createContext();

export const UserProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetUserRequest = async function () {
    try {
      setLoading(true);
      const savedUser = await JSON.parse(localStorage.getItem("user"));
      console.log(savedUser);
      const user = await getUserAPI(savedUser.publicId);
      if (user) setUser(user);
    } catch (err) {
      console.dir(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUserRequest();
  }, []);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
