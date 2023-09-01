import type { FC, ReactElement } from "react";
import type { NavLinkProps } from "react-router-dom";
import { NavLink } from "react-router-dom";
import cn from "classnames"
import Style from "./style.module.scss";

interface Props extends NavLinkProps {
    children: string;
}

const NavItem: FC<Props> = ({ children, ...rest }): ReactElement => (
    <NavLink className={({ isActive }) => cn(Style["nav-item"], isActive && Style.active)} {...rest}>
        { children }
    </NavLink>
);

export default NavItem;