import type { ReactNode, FC, ReactElement } from "react";
import Style from "./style.module.scss";

interface Props {
    children: ReactNode;
}

const List: FC<Props> = ({ children }): ReactElement => (
    <ul className={Style.list}>
        { children }
    </ul>
);

export default List;