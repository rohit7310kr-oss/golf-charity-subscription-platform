import React from "react";
import Layout from "../../layout/Layout";

const RegisteredUserLayout = ({ children }) => {
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
      path: "/user/dashboard",
    },
    {
      id: "enter-score",
      label: "Enter Score",
      icon: "📝",
      path: "/user/enter-score",
    },
    {
      id: "my-scores",
      label: "My Scores",
      icon: "📊",
      path: "/user/my-score",
    },
    {
      id: "profile",
      label: "Profile",
      icon: "👤",
      path: "/user/profile",
    },
  ];

  return (
    <Layout menuItems={menuItems} config={{ title: "user panel", stylesObj }}>
      {children}
    </Layout>
  );
};

export default RegisteredUserLayout;
