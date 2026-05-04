import React from "react";
import Layout from "../../layout/Layout";
import { useUser } from "../../context/userContext";

const RegisteredUserLayout = ({ children }) => {
  const { user, loading: userLoading, handleLogout } = useUser();

  const stylesObj = {
    sidebar: {
      background: "linear-gradient(180deg, #2e7d32 0%, #388e3c 100%)",
    },
    sidebarHeader: {
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    },
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "🏌️‍♂️",
      path: "",
    },
    {
      id: "enter-score",
      label: "Enter Score",
      icon: "📝",
      path: "enter-score",
    },
    {
      id: "my-scores",
      label: "My Scores",
      icon: "📊",
      path: "my-score",
    },
    {
      id: "profile",
      label: "Profile",
      icon: "👤",
      path: "profile",
    },
  ];

  return (
    <Layout
      menuItems={menuItems}
      config={{ title: "user panel", stylesObj, user, handleLogout }}
      loading={{
        message: "waiting for the user data, please wait...",
        status: userLoading,
      }}
    >
      {children}
    </Layout>
  );
};

export default RegisteredUserLayout;
