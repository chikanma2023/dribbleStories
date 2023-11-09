import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Index = () => {
  return (
    <div className="flex flex-col justify-between text-xs my-5 bg-white  h-[76vh] p-5 lg:p-10">
      <form className="flex flex-col gap-10">
        <div className="flex gap-3">
          <input type="text" className="w-1/2 p-3 border" placeholder="Title" />
          <select className="outline-none outline:outline-0 bg-transparent px-3 py-2 rounded-full">
            <option value="">Category</option>
            <option value="">Breaking</option>
            <option value="">Politics</option>
            <option value="">Sport</option>
            <option value="">Trending</option>
          </select>
        </div>
        <ReactQuill
          placeholder="Write post content here"
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          }}
          theme="snow"
          className="w-[100%] max-h-96 lg:h-52 mb-20"
        />
      </form>
      <div className="flex gap-3 text-white [&_button]:bg-blue-500">
        <button className="py-2 px-4 rounded hover:bg-blue-400">Save</button>
        <button className="py-2 px-4 rounded hover:bg-blue-400">Publish</button>
      </div>
    </div>
  );
};

export default Index;
a;
