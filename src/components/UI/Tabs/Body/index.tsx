import type { FC, ReactElement } from "react";
import type { Props as PanelComponentProps } from "../Panel";
import Style from "./style.module.scss";

export interface Props {
    children: Array<ReactElement<PanelComponentProps>>;
}

const Body: FC<Props> = ({ children }): ReactElement => (
    <div className={Style.body}>
        { children }
    </div>
);

export default Body;