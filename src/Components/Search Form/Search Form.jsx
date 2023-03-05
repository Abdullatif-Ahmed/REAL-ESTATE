import { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import "./Search Form.scss";
const SearchForm = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <form className="searchForm d-flex align-items-center rounded-pill mx-auto pe-2">
      <div className="inputG d-flex align-items-center me-2">
        <input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          type="text"
          className=" searchInput w-100 rounded-pill"
          placeholder="Address, School, City, Zip or Neighborhood"
          aria-label="Address, School, City, Zip or Neighborhood"
        />
        <button
          className="closeBtn"
          onClick={(e) => {
            e.preventDefault();
            setSearchVal("");
          }}
        >
          <AiOutlineClose size={22} />
        </button>
      </div>
      <div>
        <button className="searchBtn rounded-circle text-center" type="submit">
          <AiOutlineSearch size={24} />
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
