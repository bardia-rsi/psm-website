import type { WebsiteSettings } from "./types/Data/Settings";
import type { HomePageResources } from "./types/Data/Pages/Home";
import type { FeaturesPageResources } from "./types/Data/Pages/Features";
import type { PricingPageResources } from "./types/Data/Pages/Pricing";
import type { AboutUsPageResources } from "./types/Data/Pages/AboutUs";
import type { ContactUsPageResources } from "./types/Data/Pages/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ComingSoon from "./pages/ComingSoon";
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
                    { path: "/features", id: "features", element: <Features />, loader: createLoader<FeaturesPageResources>("pages/features") },
                    { path: "/pricing", id: "pricing", element: <Pricing />, loader: createLoader<PricingPageResources>("pages/pricing") },
                    { path: "/about-us", id: "aboutUs", element: <AboutUs />, loader: createLoader<AboutUsPageResources>("pages/about-us") },
                    { path: "/contact-us", element: <ContactUs />, loader: createLoader<ContactUsPageResources>("pages/contact-us") }
                ]
            },
            { path: "/sign-up", element: <SignUp /> },
            { path: "/login", element: <Login /> },
            {
                path: "/",
                element: <ComingSoon />,
                children: [
                    { path: "/help" },
                    { path: "/how-it-works" },
                    { path: "/terms-of-service" },
                    { path: "/blog" },
                    { path: "/200-worst-passwords" },
                    { path: "/passwordless" },
                    { path: "/reset-password" },
                    { path: "/username-generator" },
                    { path: "/password-generator" },
                    { path: "/password-strength-checker" },
                    { path: "/data-breach-scanner" },
                    { path: "/password-sharer" },
                    { path: "/student-discount" },
                    { path: "/refer-a-friend" },
                    { path: "/download/windows" },
                    { path: "/download/macos" },
                    { path: "/download/linux" },
                    { path: "/download/ios" },
                    { path: "/download/android" },
                    { path: "/download/web-vault" },
                    { path: "/download/chrome" },
                    { path: "/download/firefox" },
                    { path: "/download/edge" },
                    { path: "/download/opera" },
                    { path: "/download/safari" },
                    { path: "/checkout" },
                    { path: "/privacy-policy" },
                    { path: "/forgot-password" }
                ]
            }
        ]
    }
]);

export default router;