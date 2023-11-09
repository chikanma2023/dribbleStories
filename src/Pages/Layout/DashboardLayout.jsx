import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { SideBar, Header } from "../../component";

const DashboardLayout = ({ children }) => {
  const SideBarRef = useRef();

  const handleToggle = (element) =>
    element.current.classList.contains("hidden")
      ? element.current.classList.remove("hidden")
      : element.current.classList.add("hidden");

  return (
    <div className="relative lg:p-8 bg-blue-50 min-h-screen overflow-y-scroll">
      <div className="container h-full relative grid grid-cols-2">
        <SideBar UseRef={SideBarRef} onclick={SideBarRef} />
        <div className="w-full lg:w-[80%] absolute right-0">
          <Header onclick={() => handleToggle(SideBarRef)} />
          {children}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
