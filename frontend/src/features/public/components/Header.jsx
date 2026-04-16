import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      // For anchor links, scroll to section
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={styles.header}>
      <h1>Golf Charity Subscription Platform</h1>
      <nav className={styles.nav}>
        <a onClick={() => handleNavClick("#charities")}>Charities</a>
        <a onClick={() => handleNavClick("#plans")}>Plans</a>
        <a onClick={() => handleNavClick("#register")}>Register</a>
        <a onClick={() => handleNavClick("#pay")}>Pay</a>
      </nav>
    </header>
  );
};

export default Header;
