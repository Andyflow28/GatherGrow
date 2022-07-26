import NavBar from "./NavBar";
import Footer from "./Footer";

const PageWrapper = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default PageWrapper;
