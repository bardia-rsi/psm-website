import type { ReactNode, FC, ReactElement } from "react";
import Style from "./style.module.scss";

export interface Props {
    children: ReactNode;
}

const Header: FC<Props> = ({ children }): ReactElement => (
    <div className={Style.header}>
        { children }
    </div>
);

export default Header;