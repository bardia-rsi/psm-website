import type { FC, ReactElement } from "react";
import type { HomePageResources } from "../../../types/Data/Pages/Home";
import { useRouteLoaderData } from "react-router-dom";
import cn from "classnames";
import SVG from "react-inlinesvg";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import ContainerTitle from "../../../components/UI/ContainerTitle";
import ContainerLink from "../../../components/UI/ContainerLink";
import Style from "./style.module.scss";

const Features: FC = (): ReactElement => {

    const { features: data } = useRouteLoaderData("home") as HomePageResources;

    return (
        <Container>
            <Wrapper>
                <ContainerTitle center={data.title.center}>{ data.title.text }</ContainerTitle>
                {
                    data.sections.map(({ id, title, description, image, reverse }) => (
                        <div key={id} className={cn(Style.feature, reverse && Style.reverse)}>
                            <div className={Style.image}>
                                <SVG src={image} />
                            </div>
                            <div className={Style.content}>
                                <h3 className={Style.title}>{ title }</h3>
                                <p>{ description }</p>
                            </div>
                        </div>
                    ))
                }
                <ContainerLink to={data.link.url}>{ data.link.text }</ContainerLink>
            </Wrapper>
        </Container>
    );

}

export default Features;