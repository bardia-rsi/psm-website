import type { ReactElement, FC } from "react";
import type { Props as HeaderComponentProps } from "../Header";
import type { Props as BodyComponentProps } from "../Body";
import Style from "./style.module.scss";

export interface Props {
    children: [ReactElement<HeaderComponentProps>, ReactElement<BodyComponentProps>];
}

const Item: FC<Props> = ({ children }): ReactElement => (
    <div className={Style.item}>
        { children }
    </div>
);

export default Item;