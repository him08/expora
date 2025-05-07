import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="overflow-hidden min-h-screen relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              360 DEGRESS VIRTUAL TOUR 
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Effortlessly explore
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
            Experience the world like never before with our Virtual Travel Companion—bringing you 360-degree immersive tours of breathtaking destinations worldwide.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
             <Link to="search"> <Button icon="/images/zap.svg">Try it now</Button></Link>
            </LinkScroll>
          </div>

          <div className="absolute top-100 left-1/2 -translate-x-1/2 w-[2500px] max-w-full h-auto pointer-events-none hero-img_res">
  <img
    src="/images/travel.png"
    className="max-w-full h-auto"
    alt="hero"
  />
</div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;