import type { FC, ReactElement } from "react";
import Style from "./style.module.scss";

const TestAccountToastMessage: FC = (): ReactElement => (
    <div className={Style.container}>
        <h5 className={Style.title}>Test Account</h5>
        <p className={Style.paragraph}>Username: <b>test</b></p>
        <p className={Style.paragraph}>Password: <b>Test123!@#</b></p>
    </div>
);

export default TestAccountToastMessage;