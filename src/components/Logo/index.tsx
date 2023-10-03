import type { FC, ReactElement } from "react";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import Style from "./style.module.scss"

interface Props extends Omit<LinkProps, "to"> {
    src: string;
}

const Logo: FC<Props> = ({ src, ...rest }): ReactElement => (
    <Link to="/" {...rest} className={Style.link}>
        <SVG src={src} className={Style.logo} />
    </Link>
);

export default Logo;