import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import BestSell from "../components/Project/BestSell/BestSell";
import LearnCode from "../components/Project/LeartCode/LearnCode";
import Photography from "../components/Project/Photography/Photography";
import Window from "../components/Window/Window";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Window></Window>
            },

            {
                path: '/bestSell',
                element: <BestSell></BestSell>
            },
            {
                path: '/photo',
                element: <Photography></Photography>
            },
            {
                path: '/learnCode',
                element: <LearnCode></LearnCode>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]


    }
])