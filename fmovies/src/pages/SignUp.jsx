import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { registerUser } from "../services/user/user";

export default function SignUp() {
  //connet with the backend

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    name,
    email,
    password,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("user", user);
    try {
      const response = await registerUser(user);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex items-center w-screen">
      <div className=" flex m-auto flex-col gap-y-2 bg-slate-500 p-10 rounded-2xl">
        <div className="flex justify-between">
          <h1 className="text-4xl ">Sign Up</h1>
          <Link to={`/home`}>
            <RxCross1 className="text-2xl w-fit " />
          </Link>
        </div>
        <div>
          <form
            className=" flex m-auto flex-col gap-y-4 text-lg"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className=" flex m-auto flex-col w-full ">
              <label htmlFor="">Name</label>
              <input
                className="text-black p-2 rounded-lg"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" flex m-auto flex-col w-full ">
              <label htmlFor="">Email</label>
              <input
                className="text-black p-2 rounded-lg"
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className=" flex m-auto flex-col w-full  ">
              <label htmlFor="">Password</label>
              <input
                className="text-black p-2 rounded-lg"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-lime-500 p-2 rounded-lg mb-2" type="submit">
              Sign Up
            </button>
          </form>
          <Link to={`/signin`} className="text-sm">
            Already have an account? SignIn Now!
          </Link>
        </div>
      </div>
    </div>
  );
}
