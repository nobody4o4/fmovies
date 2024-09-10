import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/movie";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
