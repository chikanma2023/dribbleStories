import Hero from "../component/Hero";
import Posts from "../component/Posts";

const Home = () => {
  return (
    <section className="container mx-auto p-5">
      <Hero />
      <Posts />
    </section>
  );
};

export default Home;
