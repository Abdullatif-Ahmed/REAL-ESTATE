import axios from "axios";
import { memo, useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import TryAgain from "../Try again";
import { RiseLoader } from "react-spinners";
import "./Search Form.scss";
import SearchItems from "../Search Items/Search Items";
import { useNavigate } from "react-router";
const SearchForm = ({ catg }) => {
  const [searchVal, setSearchVal] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropDownBtn = useRef();
  const dropDownMenu = useRef();
  const navigate = useNavigate();
  const { isLoading, data, refetch, isError } = useQuery(
    ["auto-complete", searchVal.trim()],
    () => {
      return axios.get(
        `https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
          },
          params: {
            input: searchVal.trim(),
            limit: "15",
          },
        }
      );
    }
  );
  console.log(data);
  const searchSelect = (li) => {
    const city =
      li.area_type !== "city" &&
      li.area_type !== "state" &&
      li.area_type !== "county"
        ? li.city
        : "";
    setSearchVal(`${li[li.area_type]}, ${city && city + ","} ${li.state_code}`);
    navigate(
      `/${catg === "sale" ? "stateforsale" : "stateforrent"}/search/${
        !li?.postal_code ? li[li.area_type].split(" ").join("-") + "_" : ""
      }${city && city.split(" ").join("-") + "_"}${li.state_code}${
        li.postal_code
          ? `/${li.area_type + "s"}/${
              li[li.area_type].split(" ").join("-") + "_"
            }${li.postal_code}`
          : ""
      }`
    );
  };

  useEffect(() => {
    const clickOutSide = (e) => {
      if (
        openDropDown &&
        !dropDownBtn.current.contains(e.target) &&
        !dropDownMenu.current.contains(e.target)
      ) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("click", clickOutSide);
    return () => document.removeEventListener("click", clickOutSide);
  }, [openDropDown]);
  return (
    <section className="searchCon mx-auto">
      <div className="dropDown position-relative">
        <div className="dropDown-toggle" ref={dropDownBtn}>
          <form className="searchForm d-flex align-items-center rounded-pill  pe-2">
            <div className="inputG d-flex align-items-center me-2">
              <input
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                type="text"
                className=" searchInput w-100 rounded-pill"
                placeholder="Address, School, City, Zip or Neighborhood"
                aria-label="Address, School, City, Zip or Neighborhood"
                onFocus={() => setOpenDropDown(true)}
              />
              {searchVal && (
                <button
                  className="closeBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSearchVal("");
                  }}
                >
                  <AiOutlineClose size={22} />
                </button>
              )}
            </div>
            <div>
              <button
                className="searchBtn rounded-circle text-center"
                type="submit"
              >
                <AiOutlineSearch size={24} />
              </button>
            </div>
          </form>
        </div>
        {openDropDown && (
          <div
            className="dropDown-menu w-100 position-absolute"
            ref={dropDownMenu}
          >
            {isError ? (
              <div className="text-center">
                {" "}
                <TryAgain message="something went wrong" reFetch={refetch} />
              </div>
            ) : isLoading ? (
              <div className="py-5 text-center">
                <RiseLoader color="rgba(224, 7, 7, 1)" />
              </div>
            ) : data?.data?.autocomplete?.length === 0 ? (
              <div>No Resultes</div>
            ) : (
              <div>
                {data?.data?.autocomplete?.some(
                  (el) => el.area_type === "state"
                ) && (
                  <SearchItems
                    type="state"
                    data={data.data.autocomplete.filter(
                      (el) => el.area_type === "state"
                    )}
                    searchSelect={searchSelect}
                  />
                )}
                {data?.data?.autocomplete?.some(
                  (el) => el.area_type === "city"
                ) && (
                  <SearchItems
                    type="city"
                    data={data.data.autocomplete.filter(
                      (el) => el.area_type === "city"
                    )}
                    searchSelect={searchSelect}
                  />
                )}
                {data?.data?.autocomplete?.some(
                  (el) => el.area_type === "school"
                ) && (
                  <SearchItems
                    type="school"
                    data={data.data.autocomplete.filter(
                      (el) => el.area_type === "school"
                    )}
                    searchSelect={searchSelect}
                  />
                )}
                {data?.data?.autocomplete?.some(
                  (el) => el.area_type === "school_district"
                ) && (
                  <SearchItems
                    type="school_district"
                    data={data.data.autocomplete.filter(
                      (el) => el.area_type === "school_district"
                    )}
                    searchSelect={searchSelect}
                  />
                )}
                {data?.data?.autocomplete?.some(
                  (el) => el.area_type === "neighborhood"
                ) && (
                  <SearchItems
                    type="neighborhood"
                    data={data.data.autocomplete.filter(
                      (el) => el.area_type === "neighborhood"
                    )}
                    searchSelect={searchSelect}
                  />
                )}
                {data?.data?.autocomplete?.some(
                  (el) => el.area_type === "park"
                ) && (
                  <SearchItems
                    type="park"
                    data={data.data.autocomplete.filter(
                      (el) => el.area_type === "park"
                    )}
                    searchSelect={searchSelect}
                  />
                )}
                {data?.data?.autocomplete?.some(
                  (el) => el.area_type === "county"
                ) && (
                  <SearchItems
                    type="county"
                    data={data.data.autocomplete.filter(
                      (el) => el.area_type === "county"
                    )}
                    searchSelect={searchSelect}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default memo(SearchForm);
