import { ChevronDown } from "lucide-react";
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
    <div className="flex justify-center ">
      <button
        onClick={() => setFilterIsOpen(!filterIsOpen)}
        className=" relative z-50 flex justify-end items-center gap-2 shadow-lg p-4 bg-white rounded-lg "
      >
        <p> {selectedRegion ? selectedRegion : "Filter by Region"} </p>
        <ChevronDown size={20} />
      </button>
      {filterIsOpen && (
        <>
          <div className=" absolute z-50 mt-16  bg-white shadow-lg rounded-lg ">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => handleClose(region)}
                className={`flex justify-start items-center w-full py-2 px-7 rounded-lg
                 ${
                   region === selectedRegion
                     ? "bg-indigo-400 text-white "
                     : "hover:bg-gray-200 "
                 }
                 ${region === selectedRegion && "rounded-lg"} `}
              >
                {region}
              </button>
            ))}
          </div>
          <div
            className=" overlay fixed inset-0 "
            onClick={() => setFilterIsOpen(false)}
          ></div>
        </>
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
