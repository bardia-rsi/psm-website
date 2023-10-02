import type { FC, ReactElement } from "react";
import type { HomePageResources } from "../../../types/Data/Pages/Home";
import { useRouteLoaderData } from "react-router-dom";
import SVG from "react-inlinesvg";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import ContainerTitle from "../../../components/UI/ContainerTitle";
import { Tabs, TabHeader, Tab, TabBody, TabPanel } from "../../../components/UI/Tabs";
import Style from "./style.module.scss";

const UseCases: FC = (): ReactElement => {

    const { useCases: data } = useRouteLoaderData("home") as HomePageResources;

    return (
        <section className={Style.use_cases}>
            <Container>
                <Wrapper>
                    <ContainerTitle center={data.title.center}>{ data.title.text }</ContainerTitle>
                    <Tabs>
                        <TabHeader>
                            {
                                data.tabs.map(({ id, label }) => (
                                    <Tab key={id} id={id}>{ label }</Tab>
                                ))
                            }
                        </TabHeader>
                        <TabBody>
                            {
                                data.tabs.map(({ id, description, image }) => {
                                    return (
                                        <TabPanel key={id} id={id}>
                                            <div className={Style.panel}>
                                                <div className={Style.content}>
                                                    <p>{ description }</p>
                                                </div>
                                                <div className={Style.image}>
                                                    <SVG src={image} width="100%" />
                                                </div>
                                            </div>
                                        </TabPanel>
                                    );
                                })
                            }
                        </TabBody>
                    </Tabs>
                </Wrapper>
            </Container>
        </section>
    );
}

export default UseCases;