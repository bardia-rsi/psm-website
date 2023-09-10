import type { FC, ReactElement } from "react";
import type { FormikContextType, FieldInputProps, FieldMetaProps } from "formik";
import { useState, useEffect, useRef } from "react";
import { useFormikContext } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { omit } from "lodash";
import cn from "classnames";
import SVG from "react-inlinesvg";
import useOnclickOutside from "../../../../hooks/useOnclickOutside";
import Button from "../../Button";
import Style from "./style.module.scss";

interface Props {
    label: string;
    name: string;
    labels: string[];
    defaultLabel?: number;
}

const Select: FC<Props> = ({ name, label, labels, defaultLabel = 0 }): ReactElement => {

    const [selectedItem, setSelectedItem] = useState<string>(labels[defaultLabel]);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectElement = useRef<HTMLDivElement>(null);

    const { getFieldProps, getFieldMeta, setFieldValue }: FormikContextType<any> = useFormikContext();
    const field: FieldInputProps<any> = getFieldProps(name);
    const meta: FieldMetaProps<any> = getFieldMeta(name);
    const error: boolean = Boolean(meta.touched && meta.error);

    const openToggle = (): void => setIsOpen(prevState => !prevState);

    const selectItemHandler = (value: string): void => {
        setIsOpen(false);
        setSelectedItem(value);
    }

    useEffect(() => {

        setFieldValue(name, selectedItem);

    }, [setFieldValue, name, selectedItem]);

    useOnclickOutside(selectElement, () => setIsOpen(false), isOpen);

    return (
        <div className={Style.select_container} ref={selectElement}>
            <Button appearance="custom"
                    value={selectedItem}
                    type="button"
                    className={cn(Style.select_btn, isOpen && Style.active, error && Style.invalid)}
                    onClick={openToggle}
                    {...omit(field, "onChange", "value")}>
                <span className={Style.content}>{ selectedItem }</span>
                <motion.span className={Style.icon}
                             animate={{ transform: isOpen ? "translate(0,-50%) rotate(180deg)" : "translate(0,-50%)" }}
                             transition={{ type: "tween", duration: 0.3 }}>
                    <SVG src="/icons/collapse-arrow.svg" />
                </motion.span>
            </Button>
            <span className={cn(Style.label, error && Style.error)}>{ label }</span>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={Style.options_container}>
                            {
                                labels.map(label => (
                                    <Button key={label}
                                            appearance="custom"
                                            type="button"
                                            value={label}
                                            className={Style.option_btn}
                                            onClick={() => selectItemHandler(label)}>
                                        { label }
                                    </Button>
                                ))
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );

}

export default Select;