import PropTypes from "prop-types";
export const Country = ({ data, error }) => {
  return (
    <div className=" flex flex-wrap md:grid grid-cols-4 gap-6 py-6 max-w-7xl m-auto  ">
      {data.length > 0 ? (
        <>
          {data.map((country, index) => (
            <div className="bg-white shadow-lg" key={index}>
              <img
                src={country.flags.svg ? country.flags.svg : country.flags.png}
                alt={country.name}
                className="w-80 h-44 object-cover  "
              />
              <div className="p-5">
                <p className="capitalize font-bold text-md sm:text-1xl ">
                  {country.name}
                </p>
                <div className=" text-sm">
                  <div className="flex gap-1">
                    <p className="font-medium capitalize ">capital:</p>
                    <p className="text-gray-700"> {country.capital}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-medium capitalize ">region:</p>
                    <p className="text-gray-700"> {country.region}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-medium capitalize ">population:</p>
                    <p className="text-gray-700">
                      {country.population.toLocaleString("fr-FR")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-xl ">
          {error ? (
            <p> {error} </p>
          ) : (
            <p>the country you are looking for does not exist</p>
          )}
        </div>
      )}
    </div>
  );
};

Country.propTypes = {
  data: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};
