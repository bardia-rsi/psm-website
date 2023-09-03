import type { ReactNode, FC, ReactElement } from "react";
import type { ItemId } from "../Container";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { AccordionContext } from "../Container";
import Style from "./style.module.scss";

export interface Props {
    id: ItemId;
    children: ReactNode;
}

const Body: FC<Props> = ({ id, children }): ReactElement => {

    const { activeItem } = useContext(AccordionContext);

    return (
        <AnimatePresence>
            <div className={cn(Style.body, activeItem === id && Style.active)}>
                <motion.div initial={{ height: activeItem === id ? "auto" : 0 }}
                            animate={{ height: activeItem === id ? "auto" : 0 }}
                            exit={{ height: 0 }}
                            className={Style.content}>
                    { children }
                </motion.div>
            </div>
        </AnimatePresence>
    );

}

export default Body;