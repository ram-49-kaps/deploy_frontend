import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 text-sm font-medium rounded-full 
        border transition-all duration-300
        bg-slate-200 text-black border-slate-400 
        dark:bg-slate-800 dark:text-white dark:border-slate-600
        hover:opacity-80
      "
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
