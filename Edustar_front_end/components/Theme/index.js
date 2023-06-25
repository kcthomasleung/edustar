'use client'

import { useTheme } from "next-themes";
import { Moon, Sun } from "react-feather";
import { useEffect } from "react";
import styles from "../Theme/styles.module.css";
import Cookies from 'js-cookie';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Update the body's data-theme attribute
    document.body.dataset.theme = theme;
  }, [theme]);

  const handleToggle = () => {
    // Toggle between light and dark theme
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    Cookies.set('theme', newTheme); // Save theme preference in a cookie
  };

  return (
    <span>
      {theme === "light" ? (
        <Moon
          className={styles.circle}
          type="button"
          onClick={handleToggle}
        />
      ) : (
        <Sun
          className={styles.circle}
          type="button"
          onClick={handleToggle}
        />
      )}
    </span>
  );
};

export default ToggleTheme;