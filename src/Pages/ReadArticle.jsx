import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { find_item, img_url, Spinner } from "../component/index";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  { icon: faFacebookF, label: "Share" },
  { icon: faTwitter, label: "Tweet" },
  { icon: faLinkedin, label: "Share" },
];

const ReadArticle = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.blogPosts);
  const post = find_item(posts, params.id); // Find Post with Id

  const navigate_to_edit = () => navigate("/newblog", { state: post });

  if (!post) return <Spinner className={"w-screen h-screen"} />;

  return (
    <div className="container mx-auto px-5 mt-16">
      <div className="grid grid-cols-1 gap-16 py-10 items-center lg:grid-cols-2">
        <img src={post && img_url(post.imgId)} />
        <div className="flex flex-col gap-3 lg:px-16">
          <p className="capitalize font-bold text-2xl lg:text-4xl">
            {post && post.title}
          </p>
          <div>
            <span>by Taylor Louis in Community</span>
            <p className="text-sm text-neutral-600">{post && post.published}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-8">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex gap-2 border rounded-full py-1 px-5"
              >
                <FontAwesomeIcon
                  icon={icon.icon}
                  className="text-blue-500 text-2xl"
                />
                <p className="font-semibold text-sm">{post && icon.label}</p>
              </div>
            ))}
          </div>
          <div
            onClick={() => navigate_to_edit()}
            className="flex justify-center w-[40px] p-1 cursor-pointer text-xs rounded text-neutral-700 bg-gray-200"
          >
            <p>Edit</p>
          </div>
        </div>
      </div>
      <article className="w-full mx-auto pb-10 leading-9 font-light text-justify lg:pt-5 lg:pb-10 lg:w-[65%]">
        <div dangerouslySetInnerHTML={{ __html: post && post.text }}></div>
      </article>
    </div>
  );
};

export default ReadArticle;
