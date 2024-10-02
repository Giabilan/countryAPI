import PropTypes from "prop-types";
import { useState } from "react";
import Pagination from "react-js-pagination";

export const Country = ({ data, error }) => {
  const [activePage, setActivePage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const indexOfLastItem = activePage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col ">
          <div className="flex justify-center flex-wrap md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 ">
            {currentItems.map((country, index) => (
              <div
                className="bg-white dark:bg-neutral-700 text-black dark:text-white shadow-lg"
                key={index}
              >
                <img
                  src={
                    country.flags.svg ? country.flags.svg : country.flags.png
                  }
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
          </div>
          <div className=" flex justify-center  text-black dark:text-white ">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={ITEMS_PER_PAGE}
              totalItemsCount={data.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div className="text-xl text-black dark:text-white ">
          {error ? (
            <p> {error} </p>
          ) : (
            <p>the country you are looking for does not exist</p>
          )}
        </div>
      )}
    </>
  );
};

Country.propTypes = {
  data: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};
