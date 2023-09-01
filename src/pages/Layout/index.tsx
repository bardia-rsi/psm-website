import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/Navbar";

const Root: FC = (): ReactElement => (
    <>
        <Navbar />
        <Outlet/>
    </>
);

export default Root;