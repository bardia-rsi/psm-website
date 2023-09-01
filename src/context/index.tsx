import type { ReactNode, Context, FC, ReactElement } from "react";
import type { Theme } from "../types/Theme";
import { createContext, useState } from "react";

interface AppContextStructure {
    theme: Theme;
    setTheme: () => void;
}

interface Props {
    children: ReactNode;
}

const defaultAppContext: AppContextStructure = {
    theme: document.documentElement.getAttribute("theme") as Theme || "light",
    setTheme: () => {}
}

export const AppContext: Context<AppContextStructure> = createContext<AppContextStructure>(defaultAppContext);

export const AppContextProvider: FC<Props> = ({ children }): ReactElement => {

    const [theme, setTheme] = useState<Theme>(defaultAppContext.theme);
    const html: HTMLElement = document.documentElement;

    const themeChangeHandler = (): void => {

        const newTheme: Theme = theme === "light" ? "dark" : "light";

        html.setAttribute("theme", newTheme);
        setTheme(newTheme);

    }

    return (
        <AppContext.Provider value={{ theme, setTheme: themeChangeHandler }}>
            { children }
        </AppContext.Provider>
    );

}