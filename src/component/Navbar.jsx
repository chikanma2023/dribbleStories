import { Link } from "react-router-dom";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { NavLinks } from "./atoms/NavLinks";

const Navbar = () => {
  const navRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    if (!toggle) {
      setToggle(true);
      navRef.current.classList.remove("-left-96");
    } else {
      setToggle(false);
      navRef.current.classList.add("-left-96");
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <nav className="w-screen fixed top-0 flex justify-between items-center px-5 z-10 bg-white lg:hidden">
        <div className="flex items-center gap-5 py-4" onClick={toggleMenu}>
          {toggle ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3BottomLeftIcon className="w-5 h-5" />
          )}
          <Link to={"/"} className="text-1xl italic">
            DribbleStories
          </Link>
        </div>
        <MagnifyingGlassIcon className="w-5 h-5 text-neutral-500" />
        <div
          ref={navRef}
          className="absolute w-full -left-96 top-14 px-5 py-10 border-t bg-white flex flex-col gap-5"
        >
          {NavLinks.map((page) => (
            <Link
              to={page.href}
              className="capitalize"
              key={page.label}
              onClick={toggleMenu}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Desktop Menu */}
      <nav className="w-screen fixed top-0 px-10 py-2 hidden bg-white z-10 lg:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-14 text-sm">
            <Link to={"/"} className="text-2xl italic">
              DribbleStories
            </Link>
            {NavLinks.map((page) => (
              <Link to={page.href} className="capitalize" key={page.label}>
                {page.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-10">
            <form className="flex items-center gap-3 px-5 rounded-full font-light text-neutral-500 bg-neutral-100">
              <MagnifyingGlassIcon className="w-5 h-5" />
              <input
                type="search"
                className="py-3 bg-transparent outline-none"
                placeholder="Search..."
              />
            </form>
            <button className="py-2 px-4 text-white rounded-full font-bold bg-black">
              Share work
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
