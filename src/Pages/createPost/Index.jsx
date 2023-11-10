import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const Index = () => {
  const quillRef = useRef();
  const [file, setFile] = useState();
  const [value, setValue] = useState();

  const formdata = new FormData();
  formdata.append("file", file);

  const sendFile = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/createpost",
      formdata
    );

    if (response) console.log(response);
  };

  // "http://localhost:5000/api/createpost";

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["image", "code-block"],
      ],
    },
  };

  return (
    <div className="flex flex-col justify-between text-xs my-5 bg-white  h-[76vh] p-5 lg:p-10">
      <form className="flex flex-col gap-10">
        <div className="flex gap-3">
          <input
            type="file"
            className="w-1/2 p-3 border focus:outline-none"
            placeholder="Title"
            onChange={(event) => setFile(event.target.files[0])}
          />
          <select className="outline-none outline:outline-0 bg-transparent px-3 py-2 rounded-full cursor-pointer">
            <option value="">Category</option>
            <option value="">Breaking</option>
            <option value="">Politics</option>
            <option value="">Sport</option>
            <option value="">Trending</option>
          </select>
        </div>
        <ReactQuill
          placeholder="Write post content here"
          onChange={(event) => setValue(event)}
          modules={modules}
          theme="snow"
          className="w-[100%] h-96 lg:h-60 mb-20"
        />
      </form>
      <div className="flex gap-3 text-white [&_button]:bg-blue-700">
        <button
          className="py-2 px-4 rounded hover:bg-blue-400"
          onClick={sendFile}
        >
          Save
        </button>
        <button className="py-2 px-4 rounded hover:bg-blue-400">Publish</button>
      </div>
    </div>
  );
};

export default Index;
