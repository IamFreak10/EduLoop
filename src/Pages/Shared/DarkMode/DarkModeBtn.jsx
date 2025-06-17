import { Sun, Moon } from "lucide-react";
import useTheme from "./theme";
const DarkModeBtn = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className={`relative w-32 h-14 flex  items-center px-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 dark:from-accent dark:to-accent shadow-xl hover:cursor-pointer transition-all duration-300`}
    >
      <div
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 ${
          darkMode ? "translate-x-16" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <Moon size={28} className="text-blue-700 dark:text-black" />
        ) : (
          <Sun size={28} className="text-yellow-500 dark:text-black" />
        )}
      </div>

      <div className="flex w-full justify-between items-center px-5 text-white font-semibold">
        <Sun size={24} />
        <Moon size={24} />
      </div>
    </button>
  );
};

export default DarkModeBtn;