import PropTypes from "prop-types";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { getInitialDarkMode } from "../utils/getInitialDarkMode";

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={` ${darkMode && "dark"} `}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-[#F5F5F5] dark:bg-neutral-800">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
