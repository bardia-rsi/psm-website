import type { ReactNode, FC, ReactElement } from "react";
import cn from "classnames";
import Style from "./style.module.scss";

interface Props {
    children: ReactNode;
    className?: string;
}

const Container: FC<Props> = ({ children, className }): ReactElement => (
    <div className={cn(Style.container, className)}>
        { children }
    </div>
);

export default Container;