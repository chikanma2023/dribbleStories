import { Hero, Posts } from "../component/index";
import { useSelector } from "react-redux";
import { Spinner } from "../component/index";

const Home = () => {
  const { posts, isLoading } = useSelector((state) => state.blogPosts);
  if (isLoading) return <Spinner className={"w-screen h-screen"} />;

  return (
    <section className="container mx-auto p-5">
      <Hero />
      <Posts posts={posts} />
    </section>
  );
};

export default Home;
