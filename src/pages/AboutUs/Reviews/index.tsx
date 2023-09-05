import type { FC, ReactElement } from "react";
import type { AboutUsPageResources } from "../../../types/Data/Pages/AboutUs";
import { useRouteLoaderData } from "react-router-dom";
import SVG from "react-inlinesvg";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import ContainerTitle from "../../../components/UI/ContainerTitle";
import Style from "./style.module.scss";

const Reviews: FC = (): ReactElement => {

    const { customers: data } = useRouteLoaderData("aboutUs") as AboutUsPageResources;

    return (
        <section className={Style.reviews}>
            <Container>
                <Wrapper>
                    <ContainerTitle center={data.title.center}>{ data.title.text }</ContainerTitle>
                    <div className={Style.items}>
                        {
                            data.items.map((item) => (
                                <div key={item.id} className={Style.item}>
                                    <div className={Style.header}>
                                        <SVG src={item.icon} className={Style.logo} />
                                        <div className={Style.content}>
                                            <h4 className={Style.username}>{ item.username }</h4>
                                            <p className={Style.date}>{ item.date }</p>
                                        </div>
                                    </div>
                                    <div className={Style.body}>
                                        <h3 className={Style.title}>{ item.title }</h3>
                                        <p className={Style.description}>{ item.description }</p>
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

export default Reviews;