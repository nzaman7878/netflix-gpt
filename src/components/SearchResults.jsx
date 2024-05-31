import { useSelector } from "react-redux";

const SearchResults = () => {
  const movieResults = useSelector((state) => state.search.movieResults);

  if (!movieResults || movieResults.length === 0) {
    return <div className="text-center mt-8 text-white">No results found.</div>;
  }

  return (
    <div className="bg-gradient-to-t from-black min-h-screen p-4">
      <div className="search-results grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {movieResults.map((movie) => (
          <div key={movie.id} className="movie-result bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-auto"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">{movie.title}</h3>
              <p className="text-gray-200 text-sm line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
