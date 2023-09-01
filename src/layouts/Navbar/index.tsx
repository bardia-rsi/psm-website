import type { FC, ReactElement } from "react";
import type { WebsiteSettings } from "../../types/Data/Settings";
import { useRouteLoaderData } from "react-router-dom";
import SVG from "react-inlinesvg";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import Logo from "../../components/Logo";
import NavItem from "../../components/UI/NavItem";
import Button from "../../components/UI/Button";
import Link from "../../components/UI/Link";
import ThemeSwitcherButton from "../../components/ThemeSwitcherButton";
import Style from "./style.module.scss";

const Navbar: FC = (): ReactElement => {

    const { logo, navbar: data } = useRouteLoaderData("layout") as WebsiteSettings;

    return (
        <nav className={Style.navbar}>
            <Container className={Style.navbar_container}>
                <Wrapper className={Style.navbar_wrapper}>
                    <Button appearance="icon" variant="gray" className={Style.menu_btn}>
                        <SVG src="icons/hamburger-menu.svg" />
                    </Button>
                    <Logo src={logo} />
                    <div className={Style.menu}>
                        {
                            data.items.map(({ id, url, text }) => (
                                <NavItem key={id} to={url}>{ text }</NavItem>
                            ))
                        }
                    </div>
                    <div className={Style.buttons}>
                        { data.themeToggleButton ? <ThemeSwitcherButton /> : null }
                        {
                            data.links.map(({ id, type, variant, url, text }) => (
                                <Link key={id} to={url} type={type} variant={variant}>{ text }</Link>
                            ))
                        }
                    </div>
                </Wrapper>
            </Container>
        </nav>
    );

}

export default Navbar;