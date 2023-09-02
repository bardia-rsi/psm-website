import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

const Root: FC = (): ReactElement => (
    <>
        <Navbar />
        <Outlet/>
        <Footer />
    </>
);

export default Root;