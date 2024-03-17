import { Moon, Sun } from "lucide-react";
import PropTypes from "prop-types";
export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="bg-white dark:bg-neutral-700 text-black dark:text-white shadow-lg py-4 px-8 ">
      <div className="flex justify-between">
        <h1 className="text-center sm:text-4xl uppercase tracking-wider italic font-extrabold">
          countries
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className=" rounded-full bg-white p-2 dark:bg-neutral-700 text-black dark:text-white
          hover:bg-gray-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-300 "
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
