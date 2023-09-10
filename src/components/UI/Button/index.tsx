import type { ButtonHTMLAttributes, ReactNode, FC, ReactElement } from "react";
import type { Types, Variants } from "../../../types/Elements/Button";
import cn from "classnames";
import Style from "./style.module.scss";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance: Types | "custom";
    variant?: Variants;
    children: ReactNode;
}

const Button: FC<Props> = ({ appearance, variant = "primary", children, className, ...rest }): ReactElement => (
    <button className={cn(Style.btn, appearance !== "custom" && [Style[appearance], Style[`c_${variant}`]], className)}
            {...rest}>
        { children }
    </button>
);

export default Button;