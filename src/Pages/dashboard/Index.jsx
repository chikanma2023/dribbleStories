import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { proxy, Spinner } from "../../component/index";
import axios from "axios";
import { Link } from "react-router-dom";
import { deletepostAction } from "../../reducers/BlogPostReducers";

const Card = ({ articles }) => {
  if (!articles) return;

  const disptch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const delete_post = async (Img_Id, id) => {
    setIsLoading(true);
    if ((Img_Id, id)) {
      const response = await axios.post(`${proxy}/delete`, { Img_Id, id });
      if (response.data.success) {
        disptch(deletepostAction(id));
        alert(response.data.success);
      }
      setIsLoading(false);
      if (response.data.error) alert(response.data.error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex flex-col gap-31 p-2 bg-neutral-800 cursor-pointer hover:[&_]:hover:bg-neutral-700 rounded"
        >
          <div className="flex flex-col items-center1 gap-2 cursor-pointer">
            <div className="flex flex-col text-xs gap-2 ">
              <p className="line-clamp-2 capitalize">{article.title}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pe-5 mt-5 text-xs cursor-pointer">
            <button
              disabled={isLoading}
              className="px-2 py-1 rounded bg-red-500"
              onDoubleClick={() => delete_post(article.imgId, article.id)}
            >
              {!isLoading ? "Delete" : <Spinner />}
            </button>
            <Link
              to={`/blog/${article.id}`}
              className="flex items-center gap-1 rounded bg-neutral-900 px-2 py-1 hover:bg-transparent hover:bg-neutral-950"
            >
              <EyeIcon className="w-5 h-3" />
              <p>Read</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const Index = () => {
  const { posts, isLoading, error } = useSelector((state) => state.blogPosts);
  if (isLoading) return <Spinner />;

  return (
    <div className="border border-y-0 border-x-neutral-700 overflow-y-scroll h-[90vh] lg:h-[79vh] p-10">
      <Card articles={posts} />
    </div>
  );
};

export default Index;
