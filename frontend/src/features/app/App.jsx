import React, { Children } from "react";
import { UserProvider } from "../context/userContext";
import { Outlet } from "react-router";

const App = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default App;
