import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

export default function NavBar() {
  return (
    <div className="flex justify-between p-4 w-screen bg-gradient-to-b from-black from-10% to-transparent ">
      <Link to={`/home`}>
        <div>
          <img src={Logo} alt="fmovies logo" className="w-36" />
        </div>
      </Link>

      <div className="border border-solid-2 flex p-2 rounded-full bg-slate-800 bg-transparent gap-2">
        <button className="border border-solid-2 px-4 p-1 rounded-full">
          Filter
        </button>
        <input
          type="text"
          placeholder="Search MOVIES..."
          className="  p-1 rounded-full w-80 bg-transparent outline-none"
        />
        <button className=" mx-auto my-auto p-1 rounded-full text-2xl">
          <BiSearchAlt />
        </button>
      </div>

      <div className="gap-3  pt-3">
        <Link to={`/signin`}>
          <button className="border border-solid-2 flex  p-2 rounded-full w-full">
            <h1>Login</h1>
            <BsArrowRight className="my-auto" />
          </button>
        </Link>
      </div>
    </div>
  );
}
