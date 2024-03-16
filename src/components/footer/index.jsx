import { useContext } from "react";
import { DarkModeContext } from "../../layout";
export const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`text-center sm:text-4xl uppercase tracking-wider italic font-extrabold bg-white dark:bg-neutral-700 text-black dark:text-white shadow-lg p-4 ${
        darkMode && "dark"
      } `}
    >
      Footer
    </div>
  );
};
