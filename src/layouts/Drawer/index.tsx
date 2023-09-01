import type { FC, ReactElement, MouseEvent } from "react";
import type { WebsiteSettings } from "../../types/Data/Settings";
import { useRef, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import SVG from "react-inlinesvg";
import Logo from "../../components/Logo";
import Button from "../../components/UI/Button";
import NavItem from "../../components/UI/NavItem";
import ThemeSwitcherButton from "../../components/ThemeSwitcherButton";
import Style from "./style.module.scss";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: FC<Props> = ({ isOpen, onClose }): ReactElement | null => {

    const { logo, drawer: data } = useRouteLoaderData("layout") as WebsiteSettings;

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {

        // Prevent the body from being scrolled when the drawer is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }

    }, [isOpen])

    const closeDrawer = (): void => {
        document.body.removeAttribute("style");
        onClose();
    }

    const closeDrawerByClick = (e: MouseEvent<HTMLElement>): void => {
        if (e.target === container.current) {
            closeDrawer()
        }
    }

    return (
        <AnimatePresence>
            { isOpen && (
                <motion.div className={Style.drawer_container}
                            onClick={closeDrawerByClick}
                            ref={container}
                            initial={{ backdropFilter: "blur(0px)" }}
                            animate={{ backdropFilter: "blur(12px)" }}
                            exit={{ backdropFilter: "blur(0px)" }}
                            transition={{ type: "tween" }}>
                    <motion.div className={Style.drawer}
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "tween" }}>
                        <div className={Style.header}>
                            <Logo src={logo} onClick={closeDrawerByClick} />
                            <Button appearance="icon" variant="gray" onClick={closeDrawer} className={Style.close_btn}>
                                <SVG src="icons/xmark.svg" />
                            </Button>
                        </div>
                        <div className={Style.menu}>
                            {
                                data.items.map(({ id, url, text }) => (
                                    <NavItem key={id} to={url} onClick={closeDrawer}>{ text }</NavItem>
                                ))
                            }
                        </div>
                        <hr/>
                        {
                            data.themeToggleButton
                                ? (
                                    <div className={Style.theme_switcher_section}>
                                        <p>Switch theme:</p>
                                        <ThemeSwitcherButton />
                                    </div>
                                )
                                : null
                        }
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Drawer;