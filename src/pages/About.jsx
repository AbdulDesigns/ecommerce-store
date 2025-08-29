import AboutCard from "../components/AboutCard";
import countries from "../api/countryFacts.json";
const About = () => {
  return (
    <div className=" bg-gradient-to-t from-black/90 to-black min-h-screen w-dvw py-12 text-white/90">
      <div className=" max-w-[1200px] mx-auto flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl font-bold my-16">About</h1>
        <div className="flex flex-wrap justify-center w-full gap-8">
          {countries.map((country) => (
            <AboutCard
              key={country.id}
              country={country.countryName}
              capital={country.capital}
              population={country.population}
              facts={country.interestingFact}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
