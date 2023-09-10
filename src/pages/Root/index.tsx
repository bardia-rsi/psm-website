import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../../context";
import { ToastContextProvider } from "../../components/UI/Toast";

const Root: FC = (): ReactElement => (
    <AppContextProvider>
        <ToastContextProvider length={1}>
            <Outlet />
        </ToastContextProvider>
    </AppContextProvider>
);

export default Root;