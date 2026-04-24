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
      const response = await getUserAPI(savedUser.publicId);
      if (response) setUser(response.data.data);
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
    <userContext.Provider value={{ user, loading }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
