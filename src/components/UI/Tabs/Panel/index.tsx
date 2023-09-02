import type { ReactNode, FC, ReactElement } from "react";
import type { TabId } from "../Tabs";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabContext } from "../Tabs";
import Style from "./style.module.scss";

export interface Props {
    children: ReactNode;
    id: TabId;
}

const Panel: FC<Props> = ({ children, id }): ReactElement | null => {

    const { activeTab } = useContext(TabContext);

    return (
        <AnimatePresence mode="wait">
            { activeTab === id && (
                <motion.div className={Style.panel}
                            initial={{ display: "none", opacity: 0, y: 10 }}
                            animate={{ display: "flex", opacity: 1, y: 0 }}
                            exit={{ display: "none", opacity: 0, y: 10 }}
                            transition={{ type: "tween", staggerChildren: 0.2 }}>
                    { children }
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Panel;