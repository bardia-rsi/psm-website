import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../../context";

const Root: FC = (): ReactElement => (
    <AppContextProvider>
        <Outlet/>
    </AppContextProvider>
);

export default Root;