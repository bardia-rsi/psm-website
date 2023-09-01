import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

const Root: FC = (): ReactElement => (
    <>
        <Outlet/>
    </>
);

export default Root;