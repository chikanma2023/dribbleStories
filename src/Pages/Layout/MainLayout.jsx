import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <section className="w-screen">
        <Navbar />
        {children}
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default MainLayout;
