import { NewsCard, BlogCategories } from "../index";
import banner from "../../assets/images/dribbleBanner.png";

const Hero = () => {
  const titleStyles = "font-extrabold font-sans text-2xl leading-8 lg:text-6xl";
  return (
    <section className="w-full pt-28 lg:pt-40">
      <div>
        <p className={titleStyles}>Courtside:</p>
        <p className={titleStyles}>The Dribbble Blog</p>
      </div>
      <div className="w-full flex justify-between">
        <NewsCard
          image={banner}
          publishedDate="SEP 19, 2023"
          title="The Ultimate Guide to Website Portfolio Templates That Book More
              Clients"
        />
        <BlogCategories />
      </div>
      <div className="w-full text-2xl border-b pb-10 lg:w-2/3">
        Don’t assume that just showcasing your work is enough to book clients.
      </div>
    </section>
  );
};

export default Hero;
