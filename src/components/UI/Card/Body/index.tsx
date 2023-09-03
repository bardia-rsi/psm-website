import type { ReactNode, FC, ReactElement } from "react";
import Style from "./style.module.scss";

export interface Props {
    children: ReactNode;
}

const Body: FC<Props> = ({ children }): ReactElement => (
    <div className={Style.body}>
        { children }
    </div>
);
export default Body;