import type { FC, ReactElement } from "react";
import cn from "classnames";
import Style from "./style.module.scss";

export interface Props {
    variant?: "primary" | "secondary";
}

const Spinner: FC<Props> = ({ variant = "primary" }): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className={cn(Style.spinner, Style[variant])}>
        <circle cx="20" cy="20" r="18" />
    </svg>
);

export default Spinner;