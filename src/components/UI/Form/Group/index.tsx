import type { FC, ReactElement } from "react";
import type { PartialBy } from "../../../../utils/types";
import type { Props as ControlProps } from "../Control";
import cn from "classnames";
import { camelCase } from "lodash";
import Control from "../Control";
import ErrorMessage from "../ErrorMessage";
import Style from "./style.module.scss";

interface Props extends PartialBy<ControlProps, "label" > {
    groupClass?: string;
}

const Group: FC<Props> = ({ groupClass, name, label = name, ...rest }): ReactElement => (
    <div className={cn(Style.group, groupClass)}>
        <Control name={camelCase(name)} label={label} {...rest} />
        <ErrorMessage name={camelCase(name)} />
    </div>
)

export default Group;