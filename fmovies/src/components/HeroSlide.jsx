import { AiFillPlayCircle } from "react-icons/ai";
import {
  BsBookmark,
  BsCaretRightSquareFill,
  BsCaretLeftSquareFill,
} from "react-icons/bs";

import playingNow from "../services/fetchApiData/HeroSliderData";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import the CSS

function HeroSlide() {
  const { adata, loading } = playingNow();

  const imgUrl = "https://image.tmdb.org/t/p/original/";

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }

  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    arrows: false,
  };

  return (
    <>
      <div className=" items-baseline content-end w-screen h-[800px] overflow-hidden">
        <Slide {...properties}>
          {adata.map((data, index) => (
            <div key={index} className="relative space-y-2 ">
              <div className=" absolute h-full flex  items-baseline content-end pl-8 p-4 w-full bg-gradient-to-r from-black  to-transparent  ">
                <div className="mt-auto w-full drop-shadow-lg">
                  <div className="w-1/2  space-y-2 ">
                    <h1 className="text-4xl font-bold">
                      {data.original_title}
                    </h1>
                    <div>hd tv-14 10* {data.release_date.slice(0, 4)}</div>
                    <p>{data.overview}</p>
                  </div>
                  <div className="flex justify-between w-full mt-9">
                    <div className="flex">
                      <button className="bg-[#00acc1] px-5 py-3 rounded-full flex items-center space-x-1 text-black font-semibold text-lg">
                        <AiFillPlayCircle className="h-[25px] w-[25px]" />
                        <h1>Watch Now</h1>
                      </button>
                      <button className="px-5 py-3 rounded-full flex items-center space-x-1 text-lg font-semibold">
                        <BsBookmark />
                        <h1>BookMark</h1>
                      </button>
                    </div>
                    <div className="space-x-3 text-4xl opacity-75">
                      <button>
                        <BsCaretLeftSquareFill />
                      </button>
                      <button>
                        <BsCaretRightSquareFill />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={imgUrl + data.backdrop_path}
                  alt=""
                  className=" w-full object-center object-cover h-[800px] "
                />
              </div>

              {console.log(data.original_title)}
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default HeroSlide;
