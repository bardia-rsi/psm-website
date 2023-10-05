import type { ReactNode, ReactElement, FC } from "react";
import { cloneElement, useState, useRef } from "react";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import useOnclickOutside from "../../../hooks/useOnclickOutside";
import Style from "./style.module.scss";

interface Props {
    content: ReactNode;
    position?: "top" | "right" | "bottom" | "left";
    className?: string;
    wrapperClassName?: string;
    children: ReactElement;
}

const Tooltip: FC<Props> = ({ content, position = "top", className, wrapperClassName, children }): ReactElement => {

    const [show, setShow] = useState<boolean>(false);
    const tooltipEl = useRef(null);

    useOnclickOutside(tooltipEl, () => setShow(false), show);

    return (
        <div className={cn(Style.tooltip_wrapper, wrapperClassName)} ref={tooltipEl}>
            <AnimatePresence>
                {
                    show && (
                        <motion.div initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "tween", duration: 0.3 }}
                                    className={cn(Style.tooltip, Style[position], className)}>
                            { content }
                        </motion.div>
                    )
                }
            </AnimatePresence>
            {
                cloneElement(children, {
                    onMouseEnter: () => {

                        setShow(true);

                        if (children.props.onMouseEnter) {
                            children.props.onMouseEnter();
                        }

                    },
                    onMouseLeave: () => {

                        setShow(false);

                        if (children.props.onMouseLeave) {
                            children.props.onMouseLeave();
                        }

                    }
                })
            }
        </div>
    );

}

export default Tooltip;