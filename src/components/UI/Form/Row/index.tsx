import type { ReactElement, FC } from "react";
import Style from "./style.module.scss";

export interface Props {
    children: ReactElement[] | ReactElement;
}

const Row: FC<Props> = ({ children }): ReactElement => {

    return (
        <div className={Style.row}>
            { children }
        </div>
    );

}

export default Row;