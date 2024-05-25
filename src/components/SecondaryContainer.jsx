import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
const movies = useSelector((store)=> store.movies)

  return (
    <div>
      <MovieList title = {"Now Playing"} movies ={movies.nowPlayingMovies}/>


{/* 
    Movie List - Now playing 
        -Movies card *n
    Movie List - Trending
    Movie List - Popular
    Movie List - Horror 
   
    */}

    </div>
   
  )
}

export default SecondaryContainer