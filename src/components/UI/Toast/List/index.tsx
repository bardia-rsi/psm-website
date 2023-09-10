import type { FC, ReactElement } from "react";
import type { ContainerPosition, Toast as ToastStructure } from "../ContextProvider";
import { createPortal } from "react-dom";
import cn from "classnames";
import Toast from "../Toast";
import Style from "./style.module.scss";

interface Props {
    toasts: ToastStructure[];
    position?: ContainerPosition;
}

const List: FC<Props> = ({ position = "top-center", toasts }): ReactElement =>
    createPortal((
        <div className={cn(Style.list, Style[position.replace("-", "_")])}>
            {
                toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} />
                ))
            }
        </div>
    ), document.body);

export default List;