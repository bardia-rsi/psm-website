import type { Dispatch, SetStateAction, Context, FC, ReactElement } from "react";
import type { Props as HeaderComponentProps } from "../Header";
import type { Props as BodyComponentProps } from "../Body";
import { createContext, useState } from "react";
import Style from "./style.module.scss";

export type TabId = string | number;
interface ContextStructure {
    activeTab: TabId;
    setActiveTab: Dispatch<SetStateAction<TabId>>
}

interface Props {
    children: [ReactElement<HeaderComponentProps>, ReactElement<BodyComponentProps>];
    defaultTab?: TabId;
}

const defaultContext: ContextStructure = { activeTab: 1, setActiveTab: () => {} }

export const TabContext: Context<ContextStructure> = createContext<ContextStructure>(defaultContext);

const Container: FC<Props> = ({ children, defaultTab }): ReactElement => {

    const [activeTab, setActiveTab] = useState<TabId>(defaultTab || defaultContext.activeTab);

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={Style.tabs}>
                { children }
            </div>
        </TabContext.Provider>
    );

}

export default Container;