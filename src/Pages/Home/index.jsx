import { Link } from "react-router-dom";
import { posts } from "@/DemoData";
import coverImage from "@/assets/images/dribbleBanner.png";

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

const Home = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="w-full pt-28 lg:pt-40">
        <div>
          <p className="font-extrabold font-sans text-2xl leading-8 lg:text-6xl">
            Courtside:
          </p>
          <p className="font-extrabold font-sans text-2xl leading-8 lg:text-6xl">
            The Dribbble Blog
          </p>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-full flex flex-col gap-10 my-14 lg:w-2/3">
            <article>
              <p className="text-neutral-600">SEP 19, 2023</p>
              <p className="text-2xl lg:text-3xl">
                The Ultimate Guide to Website Portfolio Templates That Book More
                Clients
              </p>
            </article>
            <div className="p-5 border border-neutral-100 rounded">
              <img src={coverImage} className="w-full" />
            </div>
          </div>
          <div className=" w-1/2 hidden flex-col items-center text-sm ps-20 pt-20 lg:flex">
            <div className="w-2/3 flex flex-col gap-4">
              <span>
                <p>Overtime</p>
                <p className="font-light text-neutral-500">
                  The Dribbble Podcast
                </p>
              </span>
              <p>The Power of Play</p>
              <div className="border my-2"></div>
              <p className="text-lg">All Categories</p>

              {Categories.map((category) => (
                <Link
                  to=""
                  key={category.label}
                  className="capitalize hover:text-neutral-600"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full text-2xl border-b pb-10 lg:w-2/3">
          Don’t assume that just showcasing your work is enough to book clients.
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 py-10 lg:w-2/3">
        {posts.map((post, index) => (
          <Link
            key={index}
            to={`post/${post.id}`}
            className="flex flex-col gap-8 border-b pb-5 text lg:flex-row hover:[&_article]:text-red-600"
          >
            <img src={post.img} className="w-full rounded lg:w-44" />
            <div className="flex flex-col gap-1">
              <p className="text-xs">{post.published}</p>
              <article className="text-[1.4rem] font-semibold">
                {post.title}
              </article>
              <p className="line-clamp-2">{post.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
