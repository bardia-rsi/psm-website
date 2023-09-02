import type { AnchorHTMLAttributes, FC, ReactElement } from "react";
import cn from "classnames";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import Style from "./style.module.scss";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    name: string;
}

interface Props {
    to: string;
    name: string;
}

const Link = styled("a")<LinkProps>`
    &:hover {
      background: ${({ name }) => `var(--${name ? name : "ac-primary-500"})`};
    }
`;

const SocialIcon: FC<Props> = ({ to, name }): ReactElement => (
    <Link name={name} href={to} target="_blank" rel="noreferrer" className={cn(Style.social_icon)}>
        <SVG src={`logos/${name}.svg`} width="1rem" height="1rem" />
    </Link>
);

export default SocialIcon;