import type { ReactNode, FC, ReactElement } from "react";
import type { ItemId } from "../Container";
import { useContext } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import SVG from "react-inlinesvg";
import { AccordionContext } from "../Container";
import Style from "./style.module.scss";

export interface Props {
    id: ItemId;
    children: ReactNode;
}

const Header: FC<Props> = ({ id, children }): ReactElement => {

    const { activeItem, setActiveItem } = useContext(AccordionContext);

    const onClickHandler = (): void => setActiveItem(prevState => prevState === id ? null : id);

    return (
        <div className={cn(Style.header, activeItem === id && Style.active)} onClick={onClickHandler}>
            <h3 className={Style.title}>{ children }</h3>
            <motion.div animate={{ rotate: activeItem === id ? 180 : 0 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className={Style.icon}>
                <SVG src="/icons/collapse-arrow.svg" />
            </motion.div>
        </div>
    );

}

export default Header;