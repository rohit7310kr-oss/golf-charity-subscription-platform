import { React, createContext, useContext, useEffect, useState } from "react";
import { fetchProfileAPI, getUserAPI } from "../user/services/userAPI";

const userContext = createContext();

export const UserProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetUserRequest = async function () {
    try {
      setLoading(true);
      const savedUser = await JSON.parse(localStorage.getItem("user"));
      const responseUser = await getUserAPI(savedUser.publicId);
      if (responseUser) setUser(responseUser.data.data);
      const responseProfile = await fetchProfileAPI(
        responseUser.data.data.publicId,
      );
      if (!responseProfile.data) setProfile(null);

      setProfile(responseProfile.data.data);
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
    <userContext.Provider value={{ profile, user, loading }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
