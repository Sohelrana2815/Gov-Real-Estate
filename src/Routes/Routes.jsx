import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import Login from "../Pages/Login/Login";

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
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
