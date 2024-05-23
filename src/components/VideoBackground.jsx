import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)
  const dispatch = useDispatch();
  
  
  const getMoviesVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);

  return (
    <div>
<iframe 
width="560" 
height="315" 
src={"https://www.youtube.com/embed/" +trailerVideo?.key}
title="YouTube video player" 
allow="accelerometer; 
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 

>

</iframe>

    </div>
  );
}

export default VideoBackground;
