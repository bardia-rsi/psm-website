import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { AppContextProvider } from "../../context";
import { ToastContextProvider } from "../../components/UI/Toast";

const Root: FC = (): ReactElement => (
    <CookiesProvider>
        <AppContextProvider>
            <ToastContextProvider length={1}>
                <Outlet/>
            </ToastContextProvider>
        </AppContextProvider>
    </CookiesProvider>
);

export default Root;