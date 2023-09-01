import type { FC, ReactElement } from "react";
import { useContext } from "react";
import SVG from "react-inlinesvg";
import { AppContext } from "../../context";
import Button from "../UI/Button";

const ThemeSwitcherButton: FC = (): ReactElement => {

    const { theme, setTheme } = useContext(AppContext);

    return (
        <Button appearance="primary" variant="gray" onClick={setTheme}>
            <SVG src={`icons/${theme === "dark" ? "moon" : "sun"}.svg`} />
            { theme }
        </Button>
    );

}

export default ThemeSwitcherButton;