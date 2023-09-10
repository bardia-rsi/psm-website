import type { FC, ReactElement } from "react";
import type { Props as ButtonProps } from "../UI/Button";
import type { Props as SpinnerProps } from "../UI/Spinner";
import cn from "classnames";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import Style from "./style.module.scss";

export interface Props extends ButtonProps {
    loading: boolean;
    spinner?: SpinnerProps;
}

const LoadingButton: FC<Props> = ({ loading, spinner, children, className, ...rest }): ReactElement => (
    <Button className={cn(Style.loading_button, className)} {...rest}>
        {
            loading
                ? <Spinner {...spinner} />
                : children
        }
    </Button>
);

export default LoadingButton;