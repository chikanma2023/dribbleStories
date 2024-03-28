import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiLogoFacebook, BiLogoTwitter, BiLink } from "react-icons/bi";
import { posts } from "@/DemoData";

const Post = () => {
  const params = useParams();
  const [selectedPost, setSelectedPost] = useState();

  useEffect(() => {
    if (params.id) {
      const post = posts.find((item) => item.id == params.id);
      setSelectedPost(post);
    }
  }, [selectedPost]);

  return (
    <div className="container mx-auto px-5 mt-16">
      <div className="grid grid-cols-1 gap-5 md:gap-16 py-5 items-center lg:grid-cols-2">
        <img src={selectedPost?.img} />
        <div className="flex flex-col gap-3 lg:px-16">
          <p className="capitalize font-bold text-2xl lg:text-4xl">
            {selectedPost?.title}
          </p>
          <div>
            <span>by Taylor Louis in Community</span>
            <p className="text-sm text-neutral-600 my-3">
              {selectedPost?.published}
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-semibold md:gap-8">
              <div className="flex items-center gap-1 border rounded-full py-1 px-4">
                <BiLogoFacebook
                  size={25}
                  className="bg-blue-900 text-white rounded-full p-1"
                />
                Share
              </div>
              <div className="flex items-center gap-1 border rounded-full py-1 px-4">
                <BiLogoTwitter
                  size={25}
                  className="text-blue-500 rounded-full p-1"
                />
                Share
              </div>
              <div className="flex items-center gap-1 border rounded-full py-1 px-4">
                <BiLink size={25} className="p-1" />
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-5 leading-7 text-neutral-500 md:w-[65%]">
        <p> {selectedPost?.text}</p>
      </div>
    </div>
  );
};

export default Post;
