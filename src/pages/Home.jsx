import HeroSection from "../components/UI/HeroSection";

const Home = () => {
  return (
    <>
      <main>
        <div className="bg-gradient-to-t from-black/90 to-black min-h-screen flex flex-col justify-center text-white/90 ">
          <HeroSection />
        </div>
      </main>
    </>
  );
};

export default Home;
