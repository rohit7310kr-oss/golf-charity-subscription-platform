import React, { Children } from "react";
import { UserProvider } from "../context/userContext";
import { ToastContainer } from "react-toastify";

const App = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default App;
