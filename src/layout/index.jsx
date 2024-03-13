import PropTypes from "prop-types";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
