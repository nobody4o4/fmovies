import { BsPlay, BsPlusCircle, BsStarFill } from "react-icons/bs";

export default function HoverDetails(props) {
  return (
    <>
      <div className="bg-slate-500 rounded-[10px] absolute z-10  inline-block left-full  pointer-events-none bg-gradient-to-t from-[#00acc1]  to-transparent transition-all duration-500 ease-in-out translate-y-[200px] group-hover:translate-y-0 ">
        <div className="p-6 flex flex-col w-[20rem]">
          <div className="flex justify-between items-center font-bold text-2xl pb-4">
            <p>{props.title}</p>
            <BsPlusCircle />
          </div>
          <div className="flex border-b-2 text-sm border-b-gray-500 pb-4 justify-between items-center  text-cyan-500">
            <div className="rounded-[15px] bg-cyan-500">
              <p className="pl-2 pr-2 text-neutral-800">HD</p>
            </div>
            <div className="rounded-[15px] border-cyan-500 border-2 ">
              <p className="pl-2 pr-2">R-rated</p>
            </div>
            <p>{props.release_date}</p>
            <BsStarFill />
            <p>{props.vote}</p>
            <p>404 min</p>
          </div>
          <div className="flex">
            <p>Country:</p>
            <p>Earth</p>
          </div>
          <div className="flex">
            <p>Genre:</p>
            <p>Adventure</p>
          </div>
          <div className="flex">
            <p>Popularity:</p>
            <p>{props.popularity}</p>
          </div>
          <div className="text-neutral-100 pt-4">
            <p className="truncate">{props.overview}</p>
          </div>
          <div className="w-full bg-cyan-500 flex items-center justify-center rounded-[5px] pt-2 pb-2 mt-4">
            <BsPlay />
            <p>Watch Now</p>
          </div>
        </div>
      </div>
    </>
  );
}
