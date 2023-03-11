import "./Search Items.scss";
import { GoLocation } from "react-icons/go";
import { MdLocationCity, MdOutlineSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BsHouses } from "react-icons/bs";
const SearchItems = ({ type, data, searchSelect }) => {
  return (
    <div>
      <header
        className="px-4 py-2 text-uppercase"
        style={{ color: "rgb(151 151 151)" }}
      >
        {type.split("_").join(" ")}
      </header>
      <ul className="list-unstyled">
        {data.map((l) => (
          <li key={l._id}>
            <button
              className="searchItem px-4 py-3 w-100"
              onClick={() => searchSelect(l)}
            >
              <IconContext.Provider
                value={{ size: "22", className: "icon me-3" }}
              >
                {type === "city" ? (
                  <MdLocationCity />
                ) : type === "school" ? (
                  <MdOutlineSchool />
                ) : type === "school_district" ? (
                  <FaSchool />
                ) : type === "park" ? (
                  <GiParkBench />
                ) : type === "neighborhood" ? (
                  <BsHouses />
                ) : (
                  <GoLocation />
                )}
              </IconContext.Provider>
              {l[type]},{" "}
              {type !== "city" && type !== "county" && type !== "state"
                ? l?.city + ","
                : ""}
              {l?.state_code}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchItems;
