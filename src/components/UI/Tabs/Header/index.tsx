import type { FC, ReactElement } from "react";
import type { Props as TabComponentProps } from "../Tab";
import List from "../List";
import Style from "./style.module.scss";

export interface Props {
    children: Array<ReactElement<TabComponentProps>>;
}

const Header: FC<Props> = ({ children }): ReactElement => (
    <nav className={Style.header}>
        <List>
            { children }
        </List>
    </nav>
);

export default Header;