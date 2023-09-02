import type { FC, ReactElement } from "react";
import cn from "classnames";
import Style from "./style.module.scss";

interface Props {
    center?: boolean;
    children: string;
    className?: string;
}

const ContainerTitle: FC<Props> = ({ center, children, className, ...rest }): ReactElement => (
    <h2 className={cn(Style.title, center && Style.center, className)}>
        { children }
    </h2>
);

export default ContainerTitle;