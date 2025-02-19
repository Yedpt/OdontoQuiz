import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Intro from "../components/Intro";
import Quiz from "../pages/Quiz";

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Intro /> },
        { path: "quiz", element: <Quiz /> },
      ],
    },
  ],
  { basename: "/" } // Asegura que funcione en producción
);
