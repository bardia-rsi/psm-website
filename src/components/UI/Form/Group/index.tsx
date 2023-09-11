import type { ReactNode, FC, ReactElement } from "react";
import type { PartialBy } from "../../../../utils/types";
import type { Props as ControlProps } from "../Control";
import cn from "classnames";
import { camelCase } from "lodash";
import Control from "../Control";
import ErrorMessage from "../ErrorMessage";
import Style from "./style.module.scss";

interface Props extends PartialBy<ControlProps, "label" > {
    groupClass?: string;
    children?: ReactNode;
}

const Group: FC<Props> = ({ groupClass, name, label = name, children, ...rest }): ReactElement => (
    <div className={cn(Style.group, groupClass)}>
        <Control name={camelCase(name)} label={label} {...rest} />
        { children }
        <ErrorMessage name={camelCase(name)} />
    </div>
)

export default Group;