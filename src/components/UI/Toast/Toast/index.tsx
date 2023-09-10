import type { FC, ReactElement } from "react";
import type { Toast as Props } from "../ContextProvider";
import { useEffect, useState } from "react";
import cn from "classnames";
import SVG from "react-inlinesvg";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "../../../../hooks/useToast";
import Button from "../../Button";
import Style from "./style.module.scss";

const Toast: FC<Props> = ({ id, content, type, autoRemove = true, duration = 3000, className }): ReactElement => {

    const [ isRemoved, setIsRemoved ] = useState<boolean>(false);

    const { removeToast } = useToast();

    useEffect(() => {

        let timer: NodeJS.Timer | null = null;

        if (autoRemove && duration) {
            timer = setTimeout(() => setIsRemoved(true), duration);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };

    }, [autoRemove, duration, id, removeToast]);

    return (
        <AnimatePresence onExitComplete={() => removeToast(id)}>
            { !isRemoved && (
                <motion.div initial={{ translateY: -40, opacity: 0 }}
                            animate={{ translateY: 0, opacity: 1 }}
                            exit={{ translateY: -40, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={cn(Style.toast_item, Style[type], className)}>
                    <p className={Style.content}>{ content }</p>
                    { !autoRemove && (
                        <Button appearance="icon"
                                variant="gray"
                                className={Style.close_btn}
                                onClick={() => setIsRemoved(true)}>
                            <SVG src="/icons/close.svg" />
                        </Button>
                    ) }
                </motion.div>
            ) }
        </AnimatePresence>
    );

}

export default Toast;