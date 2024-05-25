
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
 
useNowPlayingMovies();
usePopularMovies();
useTrendingMovies();
useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
          
          MainContainer
            -VideoBackground
            -VideoTitle
          Secondary Container
            -Movielist * n
              -cards * n

      */}
    </div>
  );
};

export default Browse;
