import { Search } from "lucide-react";
import PropTypes from "prop-types";
export const Searchbar = ({ searchValue, setSearchValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center ">
      <label
        htmlFor="searchValue"
        className="p-2 bg-white dark:bg-neutral-700 text-black dark:text-white rounded-l-lg border-y border-l "
      >
        <Search />
      </label>
      <input
        type="text"
        name="searchValue"
        id="searchValue"
        placeholder="Search a Country or a Capital"
        className="bg-white dark:bg-neutral-700 text-black dark:text-white rounded-r-lg pl-2 py-2 w-56 sm:w-96 border-y border-r outline-none

        "
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </form>
  );
};

Searchbar.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};
