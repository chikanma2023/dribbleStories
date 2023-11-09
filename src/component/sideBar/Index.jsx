import { Link } from "react-router-dom";
import {
  Squares2X2Icon,
  Cog8ToothIcon,
  PencilSquareIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";

const links = [
  { label: "dashboard", icon: Squares2X2Icon, href: "" },
  { label: "create post", icon: PencilSquareIcon, href: "" },
  { label: "saved", icon: ArchiveBoxIcon, href: "" },
  { label: "settings", icon: Cog8ToothIcon, href: "" },
];

const Index = ({ UseRef, onclick }) => {
  return (
    <div ref={UseRef} className="hidden text-sm  lg:block z-50">
      <div className="fixed bg-white h-[90%] p-5 w-full lg:w-[18%] rounded-s-2xl">
        <b className="text-blue-500 text-2xl">Dashboard</b>
        <div className="flex flex-col gap-6 capitalize hover:[&_a]:text-blue-500 pt-20">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={onclick}
              className="flex gap-3 text-neutral-500"
            >
              <link.icon className="w-5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
