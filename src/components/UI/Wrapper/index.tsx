import type { ReactNode, FC, ReactElement } from "react";
import cn from "classnames";
import Style from "./style.module.scss";

interface Props {
    children: ReactNode;
    className?: string;
}

const Wrapper: FC<Props> = ({ children, className }): ReactElement => (
    <div className={cn(Style.wrapper, className)}>
        { children }
    </div>
);

export default Wrapper;