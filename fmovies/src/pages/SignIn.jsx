import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { authUser, loginUser } from "../services/user/user";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const user = {
    email,
    password,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("user", user);
    try {
      const response = await loginUser(user);
      console.log("response", response.data);
      const res = await authUser(response.data.token);
      console.log("res", res.data);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex items-center w-screen">
      <div className=" flex m-auto flex-col gap-y-2 bg-slate-500 p-10 rounded-2xl">
        <div className="flex justify-between">
          <h1 className="text-4xl ">Sign In</h1>
          <Link to={`/home`}>
            <RxCross1 className="text-2xl w-fit " />
          </Link>
        </div>
        <div>
          <form
            className=" flex m-auto flex-col gap-y-6 text-lg"
            onSubmit={(e) => onSubmit(e)}
          >
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
            {errors && <div className="text-red-500">{errors}</div>}
            <button className="bg-lime-500 p-2 rounded-lg mb-2" type="submit">
              Sign In
            </button>
          </form>
          <Link to={`/signup`} className="text-sm">
            Don`t have an account? SignUp Now!
          </Link>
        </div>
      </div>
    </div>
  );
}
