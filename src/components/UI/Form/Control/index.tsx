import type { FC, ReactElement } from "react";
import type { ElementProps } from "../Field";
import { useField } from "formik";
import cn from "classnames";
import { camelCase, omit } from "lodash";
import Select from "../Select";
import Field from "../Field";
import Style from "./style.module.scss";


export interface Props extends ElementProps {
    as?: "input" | "textarea" | "select";
    name: string;
    label: string | ReactElement;
    radio?: {
        labels: string[];
        default?: number;
    };
    select?: {
        labels: string[];
        default?: number;
    }
}

const Control: FC<Props> = ({ as = "input", name, label, type = "text", radio, select, ...rest }): ReactElement => {

    const meta = useField(name)[1];

    if (as === "select" && select) {
        return <Select name={name} label={String(label)} {...select} />
    }

    if (as !== "select" && !select) {

        if (type !== "radio" && !radio) {

            const error: boolean = Boolean(meta.touched && meta.error);

            return (
                <div className={cn(type === "checkbox" ? Style.checkbox_control : Style.control)}>
                    <Field as={as} name={name} label={String(label)} type={type} {...rest} />
                    <label htmlFor={name} className={cn(Style.label, error && Style.error)}>{ label }</label>
                </div>
            );

        }

        if (type === "radio" && radio) {
            return (
                <div className={Style.radio_buttons}>
                    {
                        radio.labels.map((radioLabel, index) => (
                            <div key={camelCase(radioLabel)} className={Style.radio_button_control}>
                                <Field name={name}
                                       label={radioLabel}
                                       type="radio"
                                       defaultChecked={(radio.default || 0) === index}
                                       {...omit(rest, "defaultChecked")} />
                                <label htmlFor={camelCase(radioLabel)} className={Style.label}>{ radioLabel }</label>
                            </div>
                        ))
                    }
                </div>
            );
        }

    }

    return <></>;

};

export default Control;