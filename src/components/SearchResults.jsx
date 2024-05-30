
import { useSelector } from "react-redux";

const SearchResults = () => {
  const movieResults = useSelector((state) => state.search.movieResults);

  if (!movieResults || movieResults.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div className="search-results grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
      {movieResults.map((movie) => (
        <div key={movie.id} className="movie-result bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-auto"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="p-4 ">
            <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-700 text-sm">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
