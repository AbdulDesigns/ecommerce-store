import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaArrowRight } from "react-icons/fa6";
import "../../../src/hero.css";

const HeroSection = () => {
  return (
    <>
      <div className=" w-full h-vh mx-auto py-10 items-center  grid grid-cols-2  max-w-[1200px] text-white ">
        <div className="Left flex flex-col gap-5 justify-items-end ">
          <h1 className="text-6xl font-bold">
            Uniting Nations, Showcasing Innovation
          </h1>
          <p className="text-lg text-white/70 font-normal max-w-[500px]">
            From every corner of the world, countries come together to share
            ideas, inspire progress, and shape the future through groundbreaking
            innovations.
          </p>
          <button
            type="button"
            id="hero-button"
            className="bg-[#42ff7b] flex items-center gap-4 text-black cursor-pointer hover:bg-green-500 shadow-md hover:shadow-lg text-lg font-semibold shadow-green-800/30 transition-all duration-300 w-fit px-6 py-3 rounded-lg"
          >
            Explore More <FaArrowRight id="arrow" />
          </button>
        </div>
        <div className="Right ">
          <DotLottieReact
            src="https://lottie.host/20df32e2-c5e2-4549-b000-b625a8768d68/rRYQuv7JBK.lottie"
            loop
            autoplay
            className="w-[100%]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
