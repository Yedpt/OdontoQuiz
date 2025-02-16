import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Intro from "../components/Intro";
import Quiz from "../pages/Quiz";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Intro />, // Muestra la pantalla de inicio en "/"
      },
      {
        path: "quiz",
        element: <Quiz />, // El quiz se muestra en "/quiz"
      },
    ],
  },
]);
