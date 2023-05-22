import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Home/Error/Error";
import CateDetails from "../Pages/Home/Category/CateDetails";
import Blogs from "../Pages/Home/Blogs/Blogs";
import AddToy from "../Pages/Home/AddToy/AddToy";
import AllToys from "../Pages/Home/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";

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
        path: "/addToy",
        element: (
            <AddToy></AddToy>
          
        ),
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://kids-truck-server.vercel.app/kidsTruck"),
      },
      {
        path: "/kidsTruck/:id",
        element: <CateDetails></CateDetails>,
        loader: ({ params }) =>
          fetch(`https://kids-truck-server.vercel.app/kidsTruck/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
