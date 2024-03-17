import { ChevronDown, SlidersHorizontal } from "lucide-react";
import PropTypes from "prop-types";

export const Filter = ({
  selectedRegion,
  setSelectedRegion,
  setFilterIsOpen,
  setSearchValue,
  filterIsOpen,
  regions,
}) => {
  const handleClose = (region) => {
    setSelectedRegion(region);
    setFilterIsOpen(false);
    setSearchValue("");
  };

  return (
    <div>
      <button
        onClick={() => setFilterIsOpen(!filterIsOpen)}
        className=" flex justify-end items-center gap-2 shadow-lg p-3 sm:p-4 bg-white dark:bg-neutral-700 text-black dark:text-white rounded-lg "
      >
        <p className="md:flex hidden">
          {selectedRegion ? selectedRegion : "Filter by Region"}
        </p>
        <p className="md:hidden flex text-sm ">
          <SlidersHorizontal size={20} />
        </p>

        <ChevronDown size={20} className="md:flex hidden" />
      </button>
      {filterIsOpen && (
        <div className="fixed inset-0 flex justify-center items-center ">
          <div className=" fixed z-50 w-72 h-80 sm:w-96 sm:h-80 bg-white dark:bg-neutral-700 text-black dark:text-white shadow-lg rounded-lg ">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => handleClose(region)}
                className={` w-full py-2
                 ${
                   region === selectedRegion
                     ? "bg-indigo-400 text-white "
                     : "hover:bg-gray-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-300 "
                 } `}
              >
                {region}
              </button>
            ))}
          </div>
          <div
            className=" overlay fixed z-40 inset-0 cursor-pointer dark:bg-neutral-900 dark:bg-opacity-55 "
            onClick={() => setFilterIsOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
  setFilterIsOpen: PropTypes.func,
  setSearchValue: PropTypes.func,
  filterIsOpen: PropTypes.bool,
  regions: PropTypes.array,
};
