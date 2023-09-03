import type { WebsiteSettings } from "./types/Data/Settings";
import type { HomePageResources } from "./types/Data/Pages/Home";
import type { FeaturesPageResources } from "./types/Data/Pages/Features";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
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
                    { path: "/", id: "home", element: <Home />, loader: createLoader<HomePageResources>("pages/home") },
                    { path: "/features", id: "features", element: <Features />, loader: createLoader<FeaturesPageResources>("pages/features") }
                ]
            }
        ]
    }
]);

export default router;