import About from "./about";
import Brands from "./brands";
import Contact from "./contact";
import Tagline from "./tagline";

const HomePageLayout = () => {
  return (
    <div className="flex">
      <main>
        <Tagline />
        <hr className="mb-10" />
        <div className="relative">
          <span className="absolute bottom-14 left-0" id="about"></span>
        </div>
        <About />
        <hr className="mb-10" />
        <Brands />
        <hr className="mb-10" />
        <Contact />
      </main>
    </div>
  );
};

export default HomePageLayout;
