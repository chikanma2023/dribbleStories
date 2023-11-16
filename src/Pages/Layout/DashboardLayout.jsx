import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { SideBar, SeachBar } from "../../component";

const DashboardLayout = ({ children }) => {
  const SideBarRef = useRef();

  const handleToggle = (element) =>
    element.current.classList.contains("hidden")
      ? element.current.classList.remove("hidden")
      : element.current.classList.add("hidden");

  return (
    <div className="relative lg:p-8 bg-neutral-950 text-neutral-300 min-h-screen verflow-y-hidden">
      <div className="container h-full relative grid grid-cols-2">
        <SideBar UseRef={SideBarRef} onclick={SideBarRef} />
        <div className="w-full lg:w-[80%] absolute right-0">
          <SeachBar onclick={() => handleToggle(SideBarRef)} />
          {children}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
