import type { ReactNode, FC, ReactElement } from "react";
import type { TabId } from "../Tabs";
import { useContext } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { TabContext } from "../Tabs";
import Style from "./style.module.scss";

export interface Props {
    children: ReactNode;
    id: TabId;
}

const Tab: FC<Props> = ({ children, id }): ReactElement => {

    const { activeTab, setActiveTab } = useContext(TabContext);

    return (
        <li className={cn(Style.tab, activeTab === id && Style.active )} onClick={() => setActiveTab(id)}>
            { children }
            { activeTab === id && <motion.div className={Style.underline} layoutId="underline" /> }
        </li>
    );
}

export default Tab;