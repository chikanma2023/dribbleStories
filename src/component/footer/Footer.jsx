import { Link } from "react-router-dom";

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
    <section className="bg-neutral-100">
      <div className="container mx-auto flex flex-col gap-5 py-20 px-0">
        <h1 className="text-1xl text-center italic">DribbleStories</h1>
        <div className="flex justify-center flex-wrap gap-3 text-sm font-semibold">
          {links.map((link) => (
            <Link to={link.href} key={link.label} className="text-center">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-center">
          <p>© 2023 Dribbble Terms Privacy Cookies</p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
