import { Link } from "react-router-dom";
import { Stories } from "../Stories";

const Posts = () => {
  return (
    <section className="w-full flex flex-col gap-10 py-10 lg:w-2/3">
      {Stories.map((story, index) => (
        <Link
          key={index}
          to={`${story.href}/${story.id}`}
          className="flex flex-col gap-8 border-b pb-5 text lg:flex-row hover:[&_article]:text-red-600"
        >
          <img src={story.img} className="w-full rounded lg:w-44" />
          <div className="flex flex-col gap-1">
            <p className="text-xs">{story.published}</p>
            <article className="text-[1.4rem] font-semibold">
              {story.title}
            </article>
            <p className="font-light line-clamp-2">{story.text}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Posts;
