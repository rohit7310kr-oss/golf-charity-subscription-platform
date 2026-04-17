import React from "react";
import App from "../features/app/App";
import { Outlet } from "react-router";

const AppPage = () => {
  return (
    <App>
      <Outlet />
    </App>
  );
};

export default AppPage;
