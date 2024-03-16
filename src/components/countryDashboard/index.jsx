import { useEffect, useState } from "react";
import { Filter } from "../filter";
import { Searchbar } from "../searchbar";
import { filterCountries } from "../../utils/filter";
import { Country } from "../country";
import { handleGetData } from "../../handleGetData";

export const CountryDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [...new Set(countries.map((country) => country.region))];

  const getCountry = async () => {
    try {
      const response = await handleGetData();
      response.sort((a, b) => a.name.localeCompare(b.name));
      setCountries(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  const filteredCountries = filterCountries(
    countries,
    searchValue,
    selectedRegion
  );

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <div className="flex justify-between ">
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
      {filteredCountries && <Country data={filteredCountries} />}
    </>
  );
};
