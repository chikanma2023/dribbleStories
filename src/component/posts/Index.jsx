import { Link } from "react-router-dom";
import { img_url } from "../index";

const Posts = ({ posts }) => {
  return (
    <section className="w-full flex flex-col gap-10 py-10 lg:w-2/3">
      {posts.map((story, index) => (
        <Link
          key={index}
          to={`${story.href}/${story.id}`}
          className="flex flex-col gap-8 border-b pb-5 text lg:flex-row hover:[&_article]:text-red-600"
        >
          <img src={img_url(story.imgId)} className="w-full rounded lg:w-44" />
          <div className="flex flex-col gap-1">
            <p className="text-xs">{story.published}</p>
            <article className="text-[1.4rem] font-semibold">
              {story.title}
            </article>
            <p className="font-light line-clamp-2">
              <div dangerouslySetInnerHTML={{ __html: story.text }}></div>
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Posts;
