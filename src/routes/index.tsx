import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
import Cards from "../pages/Cards";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index:true,
          element: <Home />,
        },
        {
          path:"cards",
          element: <Cards />,
        },
      ],
    },
  ]);