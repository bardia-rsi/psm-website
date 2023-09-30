import type { FC, ReactElement } from "react";
import type { FeaturesPageResources } from "../../../types/Data/Pages/Features";
import { useRouteLoaderData } from "react-router-dom";
import SVG from "react-inlinesvg";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import ContainerTitle from "../../../components/UI/ContainerTitle";
import { Card, CardHeader, CardBody, CardTitle } from "../../../components/UI/Card";
import Style from "./style.module.scss";

const Sections: FC = (): ReactElement => {

    const { sections: data } = useRouteLoaderData("features") as FeaturesPageResources;

    return (
        <>
            {
                data.map(({ id, title, cards }) => (
                    <Container key={id}>
                        <Wrapper>
                            <ContainerTitle center={title.center}>{ title.text }</ContainerTitle>
                            <div className={Style.features}>
                                {
                                    cards.map(({ id, image, title, premium, description }) => (
                                        <Card key={id}>
                                            <CardHeader>
                                                <SVG src={image} width="100%" height="auto" className={Style.image} />
                                            </CardHeader>
                                            <CardBody>
                                                <CardTitle>{ title }</CardTitle>
                                                { premium && <p className={Style.premium}>only with premium</p> }
                                                <p className={Style.description}>{ description }</p>
                                            </CardBody>
                                        </Card>
                                    ))
                                }
                            </div>
                        </Wrapper>
                    </Container>
                ))
            }
        </>
    );

}

export default Sections;