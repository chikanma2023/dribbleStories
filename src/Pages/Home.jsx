import { Hero, Posts } from "../component/index";

const Home = () => {
  return (
    <section className="container mx-auto p-5">
      <Hero />
      <Posts />
    </section>
  );
};

export default Home;
