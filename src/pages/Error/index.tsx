import type { FC, ReactElement } from "react";
import SVG from "react-inlinesvg";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import Button from "../../components/UI/Button";
import Style from "./style.module.scss";

const Error: FC = (): ReactElement => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <Container className={Style.error_container}>
            <Wrapper className={Style.error_wrapper}>
                <SVG src="/images/other/server-down.svg" className={Style.image} />
                <div className={Style.content}>
                    <h1 className={Style.title}>something went wrong</h1>
                    <p className={Style.description}>We're working to fixing the problem. Please try again.</p>
                    <Button appearance="primary" className={Style.refresh_btn} onClick={refreshPage}>
                        <SVG src="icons/refresh.svg" className={Style.refresh} />
                        Refresh Page
                    </Button>
                </div>
            </Wrapper>
        </Container>
    );

}

export default Error;