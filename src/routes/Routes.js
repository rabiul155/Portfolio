import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import BestSell from "../components/Project/BestSell/BestSell";
import LearnCode from "../components/Project/LearnCode/LearnCode";
import Photography from "../components/Project/Photography/Photography";
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

      {
        path: "/bestSell",
        element: <BestSell></BestSell>,
      },
      {
        path: "/photo",
        element: <Photography></Photography>,
      },
      {
        path: "/learnCode",
        element: <LearnCode></LearnCode>,
      },
    ],
  },
]);
