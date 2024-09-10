import { Link } from "react-router-dom";
import TopRated from "../services/fetchApiData/GetTopRated";

export default function topRated() {
  const { data, loading } = TopRated();
  const adata = data.slice(0, 15);
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }

  return (
    <div className="w-[500px] right-0">
      <h1 className="text-3xl font-bold m-4">Top Rated</h1>
      <div className="flex flex-col pl-4 pr-4  pb-6 text-sm md:text-xl  gap-y-2 ">
        {adata.map((data, index) => (
          <div key={index} className=" ">
            <Link
              to={`/movie/${data.id}`}
              className="relative bg-center bg-cover rounded-[20px] mr-6 flex hover:bg-[#00acc1]"
            >
              <img
                src={imgUrl + data.poster_path}
                alt=""
                className="  object-center object-cover w-[50px]  "
              />
              <div className="absolute text-center bottom-5 left-0 transform -translate-x-1/2 px-2 py-1 bg-black rounded-[50%] border-4 border-cyan-600 w-[2rem]">
                <p className=" text-sm">{index + 1}</p>
              </div>
              <div className="left-5 bottom-5 md:left-10 flex flex-col  font-bold justify-start items-start">
                <div className="flex flex-wrap justify-around  text-gray-500 text-xs ">
                  <p>Animation /</p>
                  <p>Adventure /</p>
                  <p>Action</p>
                </div>
                <p className=" text-neutral-300">{data.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
