import { useEffect } from "react";
// animation library
import AOS from "aos";
import "aos/dist/aos.css";
// components
import ExploreBoctrust from "./explore/ExploreBoctrust";
import HomeCarousel from "./carousel/HomeCarousel";
import Overview from "./overview/Overview";
import Calculator from "./calculator/Calculator";
import BlogList from "./blogexperience/BlogList";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <HomeCarousel />
      <div data-aos="fade-up">
        <ExploreBoctrust />
      </div>
      <div data-aos="fade-up">
        <Overview />
      </div>
      <div data-aos="fade-up">
        <Calculator />
      </div>
      <div data-aos="fade-up">
        <BlogList />
      </div>
    </>
  );
};

export default Home;
