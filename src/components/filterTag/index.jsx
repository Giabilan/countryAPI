import { X } from "lucide-react";
import PropTypes from "prop-types";

export const FilterTag = ({
  selectedRegion,
  setSelectedRegion,
  setSearchValue,
}) => {
  const handleClose = () => {
    setSelectedRegion("");
    setSearchValue("");
  };

  return (
    <>
      {selectedRegion && (
        <div className="flex pt-4 ">
          <div className=" flex items-center gap-1 text-sm sm:text-base text-white rounded-full py-1 px-2 bg-indigo-500 ">
            {selectedRegion}
            <X size={16} onClick={handleClose} className="cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};
FilterTag.propTypes = {
  selectedRegion: PropTypes.string,
  setSelectedRegion: PropTypes.func,
  setSearchValue: PropTypes.func,
};
