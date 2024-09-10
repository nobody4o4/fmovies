import { ImFire } from "react-icons/im";

import playingNow from "../services/fetchApiData/HeroSliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TrendingSlider() {
  const { adata, loading } = playingNow();

  if (loading) {
    return <p>Loading...</p>; //  render a loading indicator while fetching data
  }

  return (
    <div className=" ml-2 mr-2  ">
      <hr />
      <h1 className="flex gap-3 w-fit ml-auto mr-auto py-3 text-xl">
        <ImFire />
        TrendingSlider
        <ImFire />
      </h1>

      <div className="flex pl-4 pr-4  pb-6 text-sm md:text-xl overflow-auto">
        <Swiper spaceBetween={20} slidesPerView={4}>
          {adata.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative bg-center bg-cover p-4 w-[380px] h-[290px] rounded-[20px] mr-6  "
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}
              >
                <div className=" absolute left-5 bottom-5 md:left-10 flex flex-col  font-bold justify-start items-start">
                  <p className=" text-neutral-800">{data.title}</p>
                  <div className="flex justify-around  text-[#00acc1] ">
                    <p>Animation</p>
                    <div className="w-[10px]"></div>
                    <p>Adventure</p>
                    <div className="w-[10px]"></div>
                    <p>Action</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr />
    </div>
  );
}
