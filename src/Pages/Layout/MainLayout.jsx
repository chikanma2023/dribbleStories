import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../component/index";

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
