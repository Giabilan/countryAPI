import { ChevronDown, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { handleGetData } from "../../handleGetData";
import { Country } from "../country";

export const Filter = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [country, setCountry] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const regions = [...new Set(country.map((country) => country.region))];

  const getCountry = async () => {
    try {
      const response = await handleGetData();
      response.sort((a, b) => a.name.localeCompare(b.name));
      setCountry(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = (region) => {
    setSelectedRegion(region);
    setFilterIsOpen(false);
    setSearchValue("");
  };

  const filteredCountries = country.filter(
    (c) =>
      (selectedRegion ? c.region === selectedRegion : true) &&
      ((c.name && c.name.toLowerCase().includes(searchValue.toLowerCase())) ||
        (c.capital &&
          c.capital.toLowerCase().includes(searchValue.toLowerCase())))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
    getCountry();
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <div className="flex justify-between ">
        <>
          <form onSubmit={handleSubmit} className="flex items-center ">
            <label
              htmlFor="searchValue"
              className="p-2 bg-white rounded-l-lg border-y border-l "
            >
              <Search />
            </label>
            <input
              type="text"
              name="searchValue"
              id="searchValue"
              placeholder="Search a Country or a Capital"
              className="bg-white rounded-r-lg pl-2 py-2 w-96 border-y border-r outline-none "
              value={searchValue}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </form>
        </>
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
                    className={`flex justify-start items-center w-full py-2 px-7
                                ${
                                  region === selectedRegion
                                    ? "bg-indigo-400 text-white "
                                    : "hover:bg-gray-200 hover:rounded-lg "
                                } ${
                      region === selectedRegion && "rounded-lg"
                    } `}
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
      </div>
      {filteredCountries && <Country data={filteredCountries} />}
    </>
  );
};
