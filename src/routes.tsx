import type { WebsiteSettings } from "./types/Data/Settings";
import type { HomePageResources } from "./types/Data/Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { createLoader } from "./utils/loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                id: "layout",
                element: <Layout />,
                loader: createLoader<WebsiteSettings>("website-settings"),
                children: [
                    { path: "/", id: "home", element: <Home />, loader: createLoader<HomePageResources>("pages/home") }
                ]
            }
        ]
    }
]);

export default router;