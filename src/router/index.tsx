import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Pedals from "../pages/Pedals";
import Artist from "../pages/Artist";
import Workshop from "../pages/Workshop";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/tienda",
        element: <Pedals />,
      },
      {
        path: "/artistas",
        element: <Artist />,
      },
      {
        path: "/servicio_tecnico",
        element: <Workshop />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);
