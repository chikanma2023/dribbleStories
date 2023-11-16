export const HandleImagePreview = ({ img, onchange }) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer">
      <div className="h-[150px] w-[150px] border border-neutral-700 rounded">
        <img src={img} className="w-full h-full" />
      </div>
      <label htmlFor="upload" className="hover:text-blue-500 cursor-pointer">
        <p className="hover:bg-red-500 p-3 w-1/2 lg:w-1/5">Upload Image</p>
      </label>
      <input type="file" className="hidden" id="upload" onChange={onchange} />
    </div>
  );
};

const categories = [
  { label: "breaking", value: "breaking" },
  { label: "politics", value: "politics" },
  { label: "sports", value: "sports" },
  { label: "trending", value: "trending" },
];

export const HandleCategory = ({
  value,
  defaultValue,
  onchange,
  selectOption,
}) => {
  return (
    <div className="flex gap-3">
      <input
        value={value}
        type="text"
        className="w-1/2 p-3 bg-transparent border border-neutral-700 focus:outline-none"
        placeholder="Title"
        onChange={onchange}
      />

      <select
        defaultValue={defaultValue}
        onChange={selectOption}
        className="outline-none outline:outline-0 capitalize bg-transparent px-3 py-2 rounded-full cursor-pointer"
      >
        <option value="">Select Categories</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};
