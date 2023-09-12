import type { FC, ReactElement } from "react";
import SVG from "react-inlinesvg";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import Link from "../../components/UI/Link";
import Style from "./style.module.scss";

const NotFound: FC = (): ReactElement => (
    <Container className={Style.not_found_container}>
        <Wrapper className={Style.not_found_wrapper}>
            <SVG src="/images/other/page-not-found.svg" />
            <div className={Style.content}>
                <p className={Style.description}>
                    The page you are looking for was moved, removed, renamed or might never existed.
                </p>
                <Link type="primary" to="/">Go to homepage</Link>
            </div>
        </Wrapper>
    </Container>
);

export default NotFound;