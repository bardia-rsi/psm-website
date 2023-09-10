import type { InputHTMLAttributes, TextareaHTMLAttributes, FC, ReactElement, FocusEvent, ChangeEvent } from "react";
import type { FieldInputProps } from "formik";
import { createElement } from "react";
import { useField } from "formik";
import { camelCase, omit } from "lodash";
import cn from "classnames";
import Style from "./style.module.scss";

export type ElementProps =  Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement> & InputHTMLAttributes<HTMLInputElement>,
    keyof Omit<FieldInputProps<any>, "onChange" | "onBlur"> | "id" | "children"
>;

interface Props extends ElementProps {
    name: string;
    label: string;
    as?: "input" | "textarea";
}

const Field: FC<Props> = ({ name, label, as = "input", type = "text", onChange, onBlur, className, ...rest }): ReactElement => {

    const [field, meta] = useField(name);
    const error: boolean = Boolean(meta.touched && meta.error);

    const changeHandler = (e: ChangeEvent<any>): void => {

        if (onChange) {
            onChange(e);
        }

        field.onChange(e);

    }

    const blurHandler = (e: FocusEvent<any>): void => {

        if (onBlur) {
            onBlur(e);
        }

        field.onBlur(e);

    }

    return createElement(as, {
        id: type === "radio" ? camelCase(label) : name,
        type: as === "input" ? type : undefined,
        className: cn(Style[as], error && !["radio", "checkbox"].includes(type) && Style.invalid, className),
        value: type === "radio" ? label : undefined,
        onChange: changeHandler,
        onBlur: blurHandler,
        ...rest,
        ...omit(field, "onChange", "onBlur", type === "radio" ? "value" : "")
    });

}

export default Field;