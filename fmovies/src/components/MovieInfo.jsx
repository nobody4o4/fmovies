import { useParams } from "react-router-dom";
import MovieDetails from "../services/fetchApiData/MovieDetails";
import LoadingScreen from "./LoadingScreen";

function MovieInfo() {
  const movieID = useParams().id;
  const { data, loading } = MovieDetails(movieID);
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  console.log("asdfg13", data);
  if (loading) {
    return <LoadingScreen />; //  render a loading indicator while fetching data
  }
  console.log("asdfg13", movieID);
  return (
    <div className="flex m-4 gap-x-4 h-fit w-[1200px]">
      <img
        src={imgUrl + data.poster_path}
        alt=""
        className=" w-72 object-center  rounded-xl"
      />
      <div className="space-y-2 flex flex-col w-fit">
        <p className="text-4xl font-bold">{data.title}</p>
        <p className=" w-[80%]">{data.overview}</p>
        <p> Release Date: {data.release_date}</p>
        <p> Duration: {data.runtime}</p>
        <p> Language: {data.original_language}</p>
        <p> Tagline: {data.tagline}</p>
        <div className="flex">
          Genres:
          <div className="gap-x-2 flex">
            {data.genres.map((data, index) => (
              <p key={index}>{data.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
