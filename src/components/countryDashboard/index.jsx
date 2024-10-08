import { useEffect, useState } from "react";
import { Filter } from "../filter";
import { Searchbar } from "../searchbar";
import { filterCountries } from "../../utils/filter";
import { Country } from "../country";
import { handleGetData } from "../../API";
import { FilterTag } from "../filterTag";
export const CountryDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [error, setError] = useState(false);

  const getCountries = async () => {
    try {
      const response = await handleGetData();
      response.sort((a, b) => a.name.localeCompare(b.name));
      setCountries(response);
    } catch (error) {
      console.log(error);
      setError("Refresh the page and retry.");
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const allRegions = countries.map((country) => country.region);
  const regions = [...new Set(allRegions)];

  const filteredCountries = filterCountries(
    countries,
    searchValue,
    selectedRegion
  );

  return (
    <div className="flex flex-col justify-between max-w-7xl m-auto p-6">
      <div className="flex flex-wrap justify-between ">
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          setFilterIsOpen={setFilterIsOpen}
          setSearchValue={setSearchValue}
          filterIsOpen={filterIsOpen}
          regions={regions}
        />
      </div>
      <FilterTag
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        setSearchValue={setSearchValue}
      />
      {filteredCountries && <Country data={filteredCountries} error={error} />}
    </div>
  );
};
