import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";

const SearchBar: React.FC<{ setQuery: any }> = ({ children, setQuery }) => {
  return (
    <div className="flex justify-center my-5 pb-5">
      <div className="bg-grey rounded max-w-xl px-3 py-1 flex flex-col flex-grow">
        <div className="flex items-center">
          <SearchIcon className="text-black" style={{ fontSize: 25 }} />
          <input
            className="bg-grey flex-grow py-1 px-3 outline-none text-lg"
            autoFocus
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <ClearIcon
            className="text-black cursor-pointer"
            style={{ fontSize: 20 }}
            onClick={() => setQuery("")}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default SearchBar;
