import { Link } from "react-router-dom";

const Categories = [
  { href: "", label: "interviews" },
  { href: "", label: "podcast" },
  { href: "", label: "inspiration" },
  { href: "", label: "process" },
  { href: "", label: "meetups" },
  { href: "", label: "updates" },
  { href: "", label: "hang time" },
  { href: "", label: "community" },
];

const BlogCategories = () => {
  return (
    <div
      className="
      w-1/2
      hidden
      flex-col
      items-center
      text-sm
      ps-20
      pt-20
      lg:flex
      "
    >
      <div className="w-2/3 flex flex-col gap-4">
        <span>
          <p>Overtime</p>
          <p className="font-light text-neutral-500">The Dribbble Podcast</p>
        </span>
        <p>The Power of Play</p>
        <div className="border my-2"></div>
        <p className="text-lg">All Categories</p>

        {Categories.map((category) => (
          <Link
            to={category.href}
            key={category.label}
            className="capitalize hover:text-neutral-600"
          >
            {category.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
