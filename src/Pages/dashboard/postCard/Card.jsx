import { EyeIcon } from "@heroicons/react/24/outline";

const Card = ({ articles }) => {
  return (
    <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="h-[100px] flex items-center gap-2 shadow-md cursor-pointer rounded bg-white hover:bg-blue-50"
        >
          <img src={article.image} className="h-full" />
          <div className="flex flex-col items-center1 gap-2">
            <p className="text-xs font-bold1 text-black line-clamp-2">
              {article.title}
            </p>
            <div className="flex items-center justify-end pe-5 text-neutral-400">
              <EyeIcon className="w-5 h-3" />
              <p>{article.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

// const [value, setValue] = useState("");

// return <ReactQuill theme="snow" value={value} onChange={setValue} />;
// w-[300px] bg-red-500 drop-shadow-lg rounded overflow-hidden1 flex flex-col1 gap-1 text-neutral-500 cursor-pointer
