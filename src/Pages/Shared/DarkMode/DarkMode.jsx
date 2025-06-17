import { useContext, useEffect, useState } from 'react';
import DarkModeBtn from './DarkModeBtn';
import { ThemeProvider } from './theme';

import { Authcontext } from '../../../Context/Authcontext';

function DarkMode() {
  const { ModeInterceptor } = useContext(Authcontext);
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem('darkMode');
    return isDark === 'true';
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    ModeInterceptor();
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());

    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add('dark');
      } else {
        bodyEl.classList.remove('dark');
      }
    }
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div className=" opacity-80 hover:opacity-110   z-30  fixed top-39 right-2 ">
        <DarkModeBtn />
      </div>
    </ThemeProvider>
  );
}

export default DarkMode;
