import type { ReactElement, FC } from "react";
import type { Props as HeaderProps } from "../Header";
import type { Props as BodyProps } from "../Body";
import Style from "./style.module.scss";

interface Props {
    children: [ReactElement<HeaderProps>, ReactElement<BodyProps>];
}

const Card: FC<Props> = ({ children }): ReactElement => (
    <div className={Style.card}>
        { children }
    </div>
);

export default Card;