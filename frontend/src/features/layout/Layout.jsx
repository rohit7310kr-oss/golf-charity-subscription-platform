import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Loader from "../shared/Loader";
import { ToastContainer } from "react-toastify";

const Layout = ({
  menuItems,
  config,
  loading = { status: false },
  children,
}) => {
  const user = config.user;
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname,
    );
    return currentItem ? currentItem.label : "Admin Panel";
  };

  const handleBackToPublic = () => {
    navigate("/");
  };

  const handleLogout = () => {
    config.handleLogout();
  };

  return (
    <>
      <ToastContainer />
      {loading.status ? (
        <Loader message={loading.message} />
      ) : (
        <div className={styles.adminLayout}>
          {/* Sidebar */}
          <aside
            style={config.stylesObj.sidebar}
            className={`${styles.sidebar} ${sidebarCollapsed ? styles.collapsed : ""}`}
          >
            <div
              className={styles.sidebarHeader}
              style={config.stylesObj.sidebarHeader}
            >
              <div className={styles.logo}>
                {!sidebarCollapsed && <span>{config.title}</span>}
              </div>
              <button
                className={styles.toggleButton}
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
              >
                {sidebarCollapsed ? "→" : "←"}
              </button>
            </div>

            <nav className={styles.sidebarNav}>
              <ul className={styles.menuList}>
                {menuItems.map((item) => (
                  <li key={item.id} className={styles.menuItem}>
                    <button
                      className={`${styles.menuButton} ${
                        location.pathname === item.path ? styles.active : ""
                      }`}
                      onClick={() => handleMenuClick(item.path)}
                    >
                      <span className={styles.menuIcon}>{item.icon}</span>
                      {!sidebarCollapsed && (
                        <span className={styles.menuLabel}>{item.label}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.sidebarFooter}>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}>👤</div>
                {!sidebarCollapsed && (
                  <div className={styles.userDetails}>
                    <div className={styles.userName}>{user?.fullName}</div>
                    <div className={styles.userRole}>{user?.role}</div>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div
            className={`${styles.mainContent} ${
              sidebarCollapsed ? styles.expanded : ""
            }`}
          >
            {/* Header */}
            <header className={styles.header}>
              <div className={styles.headerLeft}>
                <h1 className={styles.pageTitle}>{getCurrentPageTitle()}</h1>
              </div>

              <div className={styles.headerRight}>
                <button className={styles.headerButton}>
                  🔔
                  <span className={styles.notificationBadge}>3</span>
                </button>
                <button className={styles.headerButton}>📧</button>
                <button
                  className={styles.headerButton}
                  onClick={handleBackToPublic}
                  title="Back to Public Site"
                >
                  🌐
                </button>
                <div className={styles.userMenu}>
                  <button className={styles.userMenuButton}>
                    <span className={styles.userMenuAvatar}>👤</span>
                    <span className={styles.userMenuName}>
                      {user?.fullName}
                    </span>
                    {/* <span className={styles.userMenuArrow}>▼</span> */}
                  </button>
                </div>
                <button
                  className={styles.headerButton}
                  onClick={handleLogout}
                  title="Back to Public Site"
                >
                  Logout
                </button>
              </div>
            </header>

            {/* Page Content */}
            <main className={styles.content}>{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
