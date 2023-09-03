import type { Dispatch, SetStateAction, Context, FC, ReactElement } from "react";
import type { Props as ItemComponentProps } from "../Item";
import { createContext, useState } from "react";
import Style from "./style.module.scss";

export type ItemId = string | number;

interface ContextStructure {
    activeItem: ItemId | null;
    setActiveItem: Dispatch<SetStateAction<ItemId | null>>
}

interface Props {
    children: Array<ReactElement<ItemComponentProps>>;
    defaultTab?: ItemId;
}

const defaultContext: ContextStructure = { activeItem: null, setActiveItem: () => {} }

export const AccordionContext: Context<ContextStructure> = createContext<ContextStructure>(defaultContext);

const Container: FC<Props> = ({ children, defaultTab = null }): ReactElement => {

    const [activeTab, setActiveItem] = useState<ItemId | null>(defaultTab || defaultContext.activeItem);

    return (
        <AccordionContext.Provider value={{ activeItem: activeTab, setActiveItem }}>
            <div className={Style.accordion}>
                { children }
            </div>
        </AccordionContext.Provider>
    );

}
export default Container;