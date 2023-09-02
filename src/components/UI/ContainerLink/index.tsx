import type { FC, ReactElement } from "react";
import Link from "../Link";
import Style from "./style.module.scss";

interface Props {
    to: string;
    children: string;
}

const ContainerLink: FC<Props> = ({ to, children }): ReactElement => (
    <div className={Style.container}>
        <Link to={to} type="link">{ children }</Link>
    </div>
);

export default ContainerLink;