import PropTypes from "prop-types";
export const Country = ({ data, error }) => {
  return (
    <div className=" flex justify-center flex-wrap md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 ">
      {data.length > 0 ? (
        <>
          {data.map((country, index) => (
            <div
              className="bg-white dark:bg-neutral-700 text-black dark:text-white shadow-lg"
              key={index}
            >
              <img
                src={country.flags.svg ? country.flags.svg : country.flags.png}
                alt={country.name}
                className="w-80 h-44 object-cover  "
              />
              <div className="p-5">
                <p className="capitalize font-bold text-md sm:text-1xl ">
                  {country.name}
                </p>
                <div className=" text-sm text-black dark:text-white ">
                  <div className="flex gap-1">
                    <p className="font-medium capitalize ">capital:</p>
                    <p>{country.capital}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-medium capitalize ">region:</p>
                    <p>{country.region}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-medium capitalize ">population:</p>
                    <p>{country.population.toLocaleString("fr-FR")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-xl text-black dark:text-white ">
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
