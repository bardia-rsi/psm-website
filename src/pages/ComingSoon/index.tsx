import type { FC, ReactElement } from "react";
import SVG from "react-inlinesvg";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import Link from "../../components/UI/Link";
import Style from "./style.module.scss";

const ComingSoon: FC = (): ReactElement => (
    <Container className={Style.coming_soon_container}>
        <Wrapper className={Style.coming_soon_wrapper}>
            <SVG src="/images/other/under-construction.svg" />
            <div className={Style.content}>
                <h1 className={Style.title}>coming soon!</h1>
                <p className={Style.description}>
                    We're coming soon! We're working hard to give you the best experience!
                </p>
                <Link type="primary" to="/" className={Style.back_btn}>
                    <SVG src="icons/back-arrow.svg" className={Style.arrow} />
                    Back to homepage
                </Link>
            </div>
        </Wrapper>
    </Container>
);

export default ComingSoon;