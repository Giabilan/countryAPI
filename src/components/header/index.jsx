import { useContext } from "react";
import { DarkModeContext } from "../../layout";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={` bg-white dark:bg-neutral-700 text-black dark:text-white shadow-lg p-4 ${
        darkMode && "dark"
      } `}
    >
      <div className="flex justify-between">
        <h1 className="text-center sm:text-4xl uppercase tracking-wider italic font-extrabold">
          countries
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="   bg-white dark:bg-neutral-700 text-black dark:text-white"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};
