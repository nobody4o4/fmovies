import NavBar from "../components/NavBar";
import TopRated from "../components/TopRated";
import RECOMMENDED from "../components/Recommended";
import MoviePlayer from "../components/MoviePlayer";
import MovieInfo from "../components/MovieInfo";

export default function Movie() {
  return (
    <>
      <NavBar />
      <MoviePlayer />
      <div className="flex relative justify-between">
        <div>
          <MovieInfo />
          <RECOMMENDED />
          <RECOMMENDED />
        </div>
        <TopRated className="w-fit" />
      </div>
    </>
  );
}
