const AboutCard = (props) => {
  console.log(props);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 shadow-lg w-80 text-white">
      <h2 className="text-xl font-bold mb-3">{props.country}</h2>
      <p className="text-gray-300">
        <span className="font-semibold">Capital:</span> {props.capital}
      </p>
      <p className="text-gray-400">
        <span className="font-semibold">Population:</span> {props.population}
      </p>
      <p className="text-gray-400 mt-3 leading-relaxed">
        <span className="italic text-gray-200">Interesting Fact:</span>{" "}
        {props.facts}
      </p>
    </div>
  );
};

export default AboutCard;
