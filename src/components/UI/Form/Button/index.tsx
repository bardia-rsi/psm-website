import type { FC, ReactElement, MouseEvent } from "react";
import type { Props as LoadingButtonProps } from "../../../LoadingButton";
import { useFormikContext } from "formik";
import LoadingButton from "../../../LoadingButton";

interface Props extends Omit<LoadingButtonProps, "loading" | "disabled"> {}

const Button: FC<Props> = ({ children, onClick, ...rest }): ReactElement => {

    const { isSubmitting } = useFormikContext();

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
    }

    return (
        <LoadingButton loading={isSubmitting}
                       disabled={isSubmitting}
                       onClick={isSubmitting ? handleClick : onClick}
                       {...rest}>
            { children }
        </LoadingButton>
    );

}

export default Button;