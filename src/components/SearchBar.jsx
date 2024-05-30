import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResult, toggleSearchView } from "../utils/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // fetch movies from TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );

      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error("Error fetching data from TMDB API:", error);
      return [];
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = searchText.current.value.trim();
    if (query) {
      const results = await searchMovieTMDB(query);

      if (results && results.length > 0) {
        const movieNames = results.map((movie) => movie.title); // Extract movie names
        dispatch(addMovieResult({ movieResults: results, movieNames })); // Dispatch results and names
        dispatch(toggleSearchView()); 
      } else {
        console.error("No results found or error in fetching results.");
      }
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button type="submit" className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
