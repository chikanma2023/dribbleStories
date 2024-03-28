import { Outlet } from "react-router-dom";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer/index";

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen">
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
