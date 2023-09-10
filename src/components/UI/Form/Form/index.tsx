import type { ReactElement, FormHTMLAttributes } from "react";
import type { FormikConfig, FormikValues } from "formik";
import type { Props as RowComponentProps } from "../Row";
import { Formik, Form as FormikForm } from "formik";
import cn from "classnames";
import { omit } from "lodash";
import Row from "../Row";
import Button from "../Button";
import Style from "./style.module.scss";

interface Props {
    form?: FormHTMLAttributes<any>;
    button?: {
        text?: string;
        full?: boolean;
    }
    children: ReactElement<RowComponentProps> | ReactElement<RowComponentProps>[];
}

type FormComponent = <Values extends FormikValues>(props: FormikConfig<Values> & Props) => ReactElement;

const Form: FormComponent = ({ form, button, children, ...props }): ReactElement => {

    return (
        <Formik {...props}>
            <FormikForm className={cn(Style.form, form?.className)} {...omit(form, "className")}>
                { children }
                <Row>
                    <Button spinner={{ variant: "secondary" }}
                            appearance="primary"
                            type="submit"
                            className={cn(Style.form_button, button?.full && Style.full)}>
                        { button?.text || "submit" }
                    </Button>
                </Row>
            </FormikForm>
        </Formik>
    );

}

export default Form;