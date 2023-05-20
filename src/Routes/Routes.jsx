import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Home/Error/Error";
import CateDetails from "../Pages/Home/Category/CateDetails";
import Blogs from "../Pages/Home/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/categryData/:id",
        element: <CateDetails></CateDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/categryData/${params.id}`)
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
