import MovieCard from "./MovieCard"


const MovieList = ({title , movies}) => {
    console.log(movies);
  return (
    <div>
     <div>
        <h1>{title}</h1>
        </div>
        
     <div>
     <MovieCard />
     <MovieCard />
     <MovieCard />
     <MovieCard />
     </div>


    </div>
  )
}

export default MovieList