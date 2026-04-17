import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import AdminLayoutPage from "../pages/admin/AdminLayoutPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminCharityPage from "../pages/admin/AdminCharityPage";
import AdminUserPage from "../pages/admin/AdminUserPage";
import AdminSubscriptionPlansPage from "../pages/admin/AdminSubscriptionPlansPage";
import AdminPaymentsPage from "../pages/admin/AdminPaymentsPage";
import UserLayoutPage from "../pages/user/UserLayoutPage";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import UserEnterScorePage from "../pages/user/UserEnterScorePage";
import UserMyScorePage from "../pages/user/UserMyScorePage";
import UserProfilePage from "../pages/user/UserProfilePage";
import AppPage from "../pages/AppPage";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/app",
    element: <AppPage />,
    children: [
      {
        path: "user",
        element: <UserLayoutPage />,
        children: [
          { path: "dashboard", index: true, element: <UserDashboardPage /> },
          { path: "enter-score", element: <UserEnterScorePage /> },
          { path: "my-score", element: <UserMyScorePage /> },
          { path: "profile", element: <UserProfilePage /> },
        ],
      },
      {
        path: "admin",
        element: <AdminLayoutPage />,
        children: [
          { path: "dashboard", element: <AdminDashboardPage />, index: true },
          { path: "charities", element: <AdminCharityPage /> },
          { path: "users", element: <AdminUserPage /> },
          { path: "plans", element: <AdminSubscriptionPlansPage /> },
          { path: "payments", element: <AdminPaymentsPage /> },
          { path: "charity", element: <AdminCharityPage /> },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
