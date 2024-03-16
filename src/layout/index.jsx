import PropTypes from "prop-types";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={` ${darkMode && "dark"} `}>
        <Header />
        <main className="bg-[#F5F5F5] dark:bg-neutral-800">{children}</main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
