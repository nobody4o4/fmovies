import home from "../../pages/home";
import movie from "../pages/movie";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const routes = [
  {
    id: `movie`,
    path: "/movie/:id",
    element: movie,
    exact: true,
  },
  {
    id: `home`,
    path: "/home",
    element: home,
    exact: true,
  },
  {
    id: `signup`,
    path: "/signup",
    element: SignUp,
    exact: true,
  },
  {
    id: `signin`,
    path: "/signin",
    element: SignIn,
    exact: true,
  },
];
