import { useEffect, useState } from "react";
import DarkModeBtn from "./DarkModeBtn";
import { ThemeProvider } from "./theme";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div className="opacity-20 hover:opacity-100 z-30  fixed  left-2" >
        <DarkModeBtn />
      </div>
    </ThemeProvider>
  );
}

export default DarkMode;