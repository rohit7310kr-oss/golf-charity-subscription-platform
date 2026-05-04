import { React, createContext, useContext, useEffect, useState } from "react";
import {
  fetchProfileAPI,
  getMeAPI,
  logoutUserAPI,
} from "../user/services/userAPI";

const userContext = createContext();

export const UserProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetUserRequest = async function () {
    try {
      setLoading(true);

      const userRes = await getMeAPI();
      if (userRes.data.data) setUser(userRes.data.data);

      const responseProfile = await fetchProfileAPI(userRes.data.data.publicId);

      if (!responseProfile.data) return setProfile(null);
      else setProfile(responseProfile.data.data);
    } catch (err) {
      console.dir(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async function () {
    try {
      await logoutUserAPI();
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (err) {
      console.dir(err);
    }
  };

  useEffect(() => {
    handleGetUserRequest();
  }, []);

  return (
    <userContext.Provider value={{ handleLogout, profile, user, loading }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
