import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import Home from "@/Pages/Home";
import SinglePost from "@/Pages/SinglePost";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <SinglePost />,
      },
    ],
  },
]);
