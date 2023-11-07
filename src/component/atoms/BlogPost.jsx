const BlogPost = ({ publishedDate, title, image }) => {
  return (
    <div className="w-full flex flex-col gap-10 my-14 lg:w-2/3">
      <article>
        <p className="text-neutral-600">{publishedDate}</p>
        <p className="text-2xl lg:text-3xl">{title}</p>
      </article>
      <div className="p-5 border border-neutral-100 rounded">
        <img src={image} className="w-full" />
      </div>
    </div>
  );
};

export default BlogPost;
