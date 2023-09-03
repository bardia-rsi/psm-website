import type { ReactNode, FC, ReactElement } from "react";
import Style from "./style.module.scss";

export interface Props {
    children: ReactNode;
}

const Title: FC<Props> = ({ children }): ReactElement => (
    <h5 className={Style.title}>
        { children }
    </h5>
);

export default Title;