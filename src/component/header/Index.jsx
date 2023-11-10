import {
  BellIcon,
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Index = ({ onclick }) => {
  return (
    <div className="flex justify-between items-center z-40 border-l bg-white px-10 py-2 lg:py-3 rounded-tr-2xl">
      <div className="w-[30%] lg:hidden">
        <Bars3BottomLeftIcon
          onClick={onclick}
          className="block w-5 lg:hidden"
        />
      </div>
      <form className="w-[100%] border rounded px-3 flex items-center gap-3">
        <MagnifyingGlassIcon className="w-5 z-10 text-neutral-400 cursor-pointer" />
        <input
          type="search"
          className="bg-transparent border-l w-[99%] py-2 px-4 outline-none placeholder:text-xs"
          placeholder="Search..."
        />
      </form>
      <div className="w-[30%] flex justify-end">
        <BellIcon className="w-5 text-neutral-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Index;
