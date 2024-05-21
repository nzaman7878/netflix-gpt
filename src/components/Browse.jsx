import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const json = await response.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
