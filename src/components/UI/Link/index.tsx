import type { ReactNode, FC, ReactElement } from "react";
import type { LinkProps } from "react-router-dom";
import type { Types, Variants } from "../../../types/Elements/Link";
import { Link as RouterLink } from "react-router-dom";
import cn from "classnames";
import ButtonStyle from "../Button/style.module.scss";
import LinkStyle from "./style.module.scss";

interface Props extends LinkProps {
    type: Types;
    variant?: Variants;
    children: ReactNode;
}

const Link: FC<Props> = ({ type, variant = "primary", children, className, ...rest }): ReactElement => (
    <RouterLink className={cn(type === "simple" || type === "link"
            ? LinkStyle[type]
            : [ButtonStyle.btn, ButtonStyle[type], ButtonStyle[`c_${variant}`]],
        className
    )} {...rest}>
        { children }
    </RouterLink>
);

export default Link;