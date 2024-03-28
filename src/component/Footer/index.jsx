import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoTwitter, BiLink } from "react-icons/bi";

const links = [
  { href: "", label: "For designers" },
  { href: "", label: "Hire talents" },
  { href: "", label: "Inspiration" },
  { href: "", label: "Advertising" },
  { href: "", label: "Blog" },
  { href: "", label: "About" },
  { href: "", label: "Career" },
  { href: "", label: "Support" },
];
const Footer = () => {
  return (
    <div className="bg-neutral-50 py-10">
      <div className="flex flex-col gap-20 md:place-items-stretch px-5 md:px-10">
        <div className="flex flex-col gap-5 items-center justify-between md:flex-row md:gap-0">
          <div>
            <Link
              to={"/"}
              className="text-2xl italic font-semibold hover:underline"
            >
              DribbleStories
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-between">
            {links.map((link) => (
              <Link to="" key={link.label} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            <BiLogoFacebook size={25} />
            <BiLogoTwitter size={25} />
            <BiLink size={25} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center text-neutral-500 md:justify-between">
          <div className="flex gap-3">
            <Link to="" className="hover:underline">
              © 2024 Dribbble
            </Link>
            <Link to="" className="hover:underline">
              Terms
            </Link>
            <Link to="" className="hover:underline">
              Privacy
            </Link>
            <Link to="" className="hover:underline">
              Cookies
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-normal gap-3">
            <Link to="" className="hover:underline">
              Jobs
            </Link>
            <Link to="" className="hover:underline">
              Designers
            </Link>
            <Link to="" className="hover:underline">
              Freelancers
            </Link>
            <Link to="" className="hover:underline">
              Tags
            </Link>
            <Link to="" className="hover:underline">
              Places
            </Link>
            <Link to="" className="hover:underline">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <section className="bg-neutral-100">
    //   <div className="container mx-auto flex flex-col gap-5 py-20 px-0">
    //     <h1 className="text-1xl text-center italic">DribbleStories</h1>
    //     <div className="flex justify-center flex-wrap gap-3 text-sm font-semibold">
    //       {links.map((link) => (
    //         <Link to={link.href} key={link.label} className="text-center">
    //           {link.label}
    //         </Link>
    //       ))}
    //     </div>
    //     <div className="text-center">
    //       <p>© 2023 Dribbble Terms Privacy Cookies</p>
    //       <p></p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Footer;
