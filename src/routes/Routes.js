import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Portfolio from "../components/Portfolio/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Portfolio></Portfolio>,
      },
    ],
  },
]);
