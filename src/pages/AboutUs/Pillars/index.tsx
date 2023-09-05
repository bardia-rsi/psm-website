import type { FC, ReactElement } from "react";
import type { AboutUsPageResources } from "../../../types/Data/Pages/AboutUs";
import { useRouteLoaderData } from "react-router-dom";
import SVG from "react-inlinesvg";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import ContainerTitle from "../../../components/UI/ContainerTitle";
import Style from "./style.module.scss";

const Pillars: FC = (): ReactElement => {

    const { pillars: data } = useRouteLoaderData("aboutUs") as AboutUsPageResources;

    return (
        <section>
            <Container className={Style.pillars_container}>
                <Wrapper>
                    <ContainerTitle center={data.title.center}>{ data.title.text }</ContainerTitle>
                    <SVG src={data.image} className={Style.image} />
                    <div className={Style.pillars}>
                        {
                            data.items.map(({ id, title, description, icon }) => (
                                <div key={id} className={Style.item}>
                                    <div>
                                        <SVG src={icon} className={Style.icon} />
                                        <h3 className={Style.title}>{ title }</h3>
                                        <p className={Style.description}>{ description }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Wrapper>
            </Container>
        </section>
    );
}

export default Pillars;