export const filterCountries = (countries, searchValue, selectedRegion) => {
  return countries.filter(
    (c) =>
      (selectedRegion ? c.region === selectedRegion : true) &&
      ((c.name && c.name.toLowerCase().includes(searchValue.toLowerCase())) ||
        (c.capital &&
          c.capital.toLowerCase().includes(searchValue.toLowerCase())))
  );
};
