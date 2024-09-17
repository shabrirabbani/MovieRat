import {IconSearch} from "@tabler/icons-react";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchSearchResults,setQuery} from "../../../redux/features/searchSlice";
import searchbg from "../../../assets/search.jpg"

export default function SearchBar({onSearch}) {
  const dispatch = useDispatch();
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchInput.value.trim();

    if (query) {
      dispatch(setQuery(query));
      dispatch(fetchSearchResults(query));
      onSearch(query);
    }
    setIsSearched(true);
  };  

  return (
    <div className="">
        <img
            src={searchbg}
            alt="searchbg"
            className="absolute object-cover w-full h-96 opacity-60"
        />
      <form
        className=" relative max-w-xl mx-auto pt-60 pb-20"
        onSubmit={handleSearch}
        >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IconSearch size={20} color="white"/>
          </div>
          <input
            type="search"
            name="searchInput"
            className="block w-full p-4 ps-10 text-sm text-gray-100 rounded-lg bg-gray-400/50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search Movie, TV Show"
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
