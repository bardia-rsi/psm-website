import type { FC, ReactElement } from "react";
import type { Complexity } from "../../helpers/password";
import styled from "styled-components";
import cn from "classnames";
import { strengthTester, complexity } from "../../helpers/password";
import Style from "./style.module.scss";

interface StrengthProps {
    score: number;
}

interface Props {
    password: string;
}

const Strength = styled("div")<StrengthProps>`
    width: ${({ score }) => score + "%"};
`;

const PasswordStrength: FC<Props> = ({ password }): ReactElement | null => {

    if (password === "") {
        return null;
    }

    const score: number = strengthTester(password);
    const complexityLevel: Complexity = complexity(score);

    return (
        <div className={cn(Style.wrapper, Style[complexityLevel.replace(" ", "_")])}>
            <div className={Style.complexity_level_wrapper}>
                <Strength score={score} className={Style.complexity_level} />
            </div>
            <span className={Style.complexity_level_text}>{ complexityLevel }</span>
        </div>
    );

}

export default PasswordStrength;