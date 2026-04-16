import React from "react";
import Layout from "../../layout/Layout";

const AdminLayout = ({ children }) => {
  const stylesObj = {
    sidebar: {
      background: "linear-gradient(180deg, #2c3e50 0%, #34495e 100%)",
    },
    sidebarHeader: {
      borderBottom: " 1px solid rgba(255, 255, 255, 0.1)",
    },
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "📊",
      path: "/admin/dashboard",
    },
    {
      id: "charities",
      label: "Charities",
      icon: "❤️",
      path: "/admin/charities",
    },
    {
      id: "plans",
      label: "Subscription Plans",
      icon: "💳",
      path: "/admin/plans",
    },
    { id: "users", label: "Users", icon: "👥", path: "/admin/users" },
    { id: "payments", label: "Payments", icon: "💰", path: "/admin/payments" },
    // {
    //   id: "analytics",
    //   label: "Analytics",
    //   icon: "📈",
    //   path: "/admin/analytics",
    // },
    // { id: "settings", label: "Settings", icon: "⚙️", path: "/admin/settings" },
  ];

  return (
    <Layout menuItems={menuItems} config={{ title: "Admin panel", stylesObj }}>
      {children}
    </Layout>
  );
};

export default AdminLayout;
