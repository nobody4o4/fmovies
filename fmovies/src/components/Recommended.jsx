import { Link } from "react-router-dom";
import PopularMovies from "../services/fetchApiData/PopularMovies";
import HoverDetails from "./HoverDetails";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";

export default function RECOMMENDED() {
  const { data, loading } = PopularMovies();
  const [hover, setHover] = useState(null);
  const adata = data.slice(0, 18);
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }

  const handleHover = (index) => {
    setHover(index);
  };

  const handleLeave = () => {
    setHover(null);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold m-4">RECOMMENDED</h1>
      sam
      <div className=" pl-4 pr-4  pb-6 text-sm md:text-xl gap-y-6 grid grid-cols-6 ">
        {adata.map((data, index) => (
          <div
            key={index}
            className="relative bg-center bg-cover p-4 w-[200px] rounded-[20px] mr-6 "
          >
            {hover === index &&
              (console.log("dateee", data.release_date),
              (
                <HoverDetails
                  title={data.title}
                  vote={data.vote_average}
                  overview={data.overview}
                  release_date={data.release_date.slice(0, 4)}
                  popularity={Math.trunc(data.popularity)}
                />
              ))}
            <Link to={`/movie/${data.id}`}>
              <div className="relative group overflow-hidden rounded-[20px]">
                <div className="absolute h-full w-full  pointer-events-none bg-gradient-to-t from-[#00acc1]  to-transparent transition-all duration-500 ease-in-out translate-y-[200px] group-hover:translate-y-0   "></div>
                <img
                  src={imgUrl + data.poster_path}
                  alt=""
                  className=" w-full object-center  rounded-[20px]  "
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleLeave()}
                />
              </div>

              <div className="left-5 bottom-5 md:left-10 flex flex-col text-lg justify-start items-start">
                <div className="flex border-b-2 text-sm border-b-gray-500 justify-between w-full items-center   text-cyan-500">
                  <p>{data.release_date.slice(0, 4)}</p>
                  <p className="flex">
                    <BsStarFill />
                    {data.vote_average}
                  </p>
                  <p>98 min</p>
                </div>
                <p className=" text-neutral-300 truncate w-full o">
                  {data.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
