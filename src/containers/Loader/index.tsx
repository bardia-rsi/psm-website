import type { ReactNode, FC, ReactElement } from "react";
import { useNavigation } from "react-router-dom";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import Spinner from "../../components/UI/Spinner";
import Style from "./style.module.scss";

interface Props {
    children: ReactNode;
}

const Loader: FC<Props> = ({ children }): ReactElement => {

    const { state } = useNavigation();

    if (state === "loading") {
        return (
            <Container className={Style.loading_container}>
                <Wrapper className={Style.loading_wrapper}>
                    <Spinner />
                    <p className={Style.text}>The page is loading...</p>
                </Wrapper>
            </Container>
        );
    }

    return (
        <>
            { children }
        </>
    );

}

export default Loader;