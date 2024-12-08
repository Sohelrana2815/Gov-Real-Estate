import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "estateDetails/:id",
        element: <EstateDetails />,
        loader: () => fetch("/estateData.json"),
      },
    ],
  },
]);

export default router;
