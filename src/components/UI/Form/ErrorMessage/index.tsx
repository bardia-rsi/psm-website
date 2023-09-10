import type { FC, ReactElement } from "react";
import type { FieldMetaProps } from "formik";
import { useFormikContext } from "formik";
import Style from "./style.module.scss";

interface Props {
    name: string;
}

const ErrorMessage: FC<Props> = ({ name }): ReactElement | null => {

    const meta: FieldMetaProps<any> = useFormikContext().getFieldMeta(name);
    const error: boolean = Boolean(meta.touched && meta.error);

    if (!error) {
        return null;
    }

    return <span className={Style.error_message}>{ meta.error }</span>;

}

export default ErrorMessage;