import Menu from "../utilities/Menu";
import Footer from "../utilities/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
