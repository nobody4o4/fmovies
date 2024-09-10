import { AiFillPlayCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import MovieDetails from "../services/fetchApiData/MovieDetails";

function MoviePlayer() {
  const movieID = useParams().id;
  const { data, loading } = MovieDetails(movieID);
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  console.log("asdfg13", data);
  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }
  console.log("asdfg13", movieID);
  return (
    <div className="relative justify-center ">
      <div className="absolute w-full h-full">
        <AiFillPlayCircle className="  h-[100px] w-[100px] text-[#00acc1] m-auto mt-56 " />
      </div>
      <div className="absolute h-full w-full bg-gradient-to-t from-black from-10% to-transparent"></div>
      <img
        src={imgUrl + data.backdrop_path}
        alt=""
        className=" w-full object-center object-cover h-[700px]"
      />
    </div>
  );
}

export default MoviePlayer;
