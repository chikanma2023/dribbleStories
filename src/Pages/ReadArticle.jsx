import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Stories } from "../component/Stories";

const icons = [
  { icon: faFacebookF, label: "Share" },
  { icon: faTwitter, label: "Tweet" },
  { icon: faLinkedin, label: "Share" },
];

const ReadArticle = () => {
  const params = useParams();
  const navigate = useNavigate();

  const post = Stories.find((post) => post.id == params.id);

  return (
    <main className="container mx-auto px-5 mt-16">
      <div className="grid grid-cols-1 gap-16 py-20 items-center lg:grid-cols-2">
        <img src={post && post.img} />
        <div className="flex flex-col gap-3 lg:px-16">
          <p className="capitalize font-bold text-2xl lg:text-4xl">
            {post && post.title}
          </p>
          <div>
            <span>by Taylor Louis in Community</span>
            <p className="text-sm text-neutral-600">{post && post.published}</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {icons.map((icon, index) => (
              <div
                className="flex gap-2 border rounded-full py-1 px-5"
                key={index}
              >
                <FontAwesomeIcon
                  icon={icon.icon}
                  className="text-blue-500 text-2xl"
                />
                <p className="font-semibold text-sm">{icon.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <article className="w-full mx-auto py-10 leading-9 font-light text-justify lg:py-24 lg:w-[65%]">
        <p>{post && post.text}</p>
      </article>
    </main>
  );
};

export default ReadArticle;
