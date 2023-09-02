import type { FC, ReactElement } from "react";
import type { HomePageResources } from "../../types/Data/Pages/Home";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AppContext } from "../../context";
import Hero from "../../containers/Hero";
import Features from "./Features";
import UseCases from "./UseCases";
import Plans from "../../containers/Plans";

const Home: FC = (): ReactElement => {

    const { hero: { image, ...restHeroData }, plans } = useLoaderData() as HomePageResources;
    const { theme } = useContext(AppContext);

    const imageArr = image!.split(".");

    return (
        <>
            <Hero image={`${imageArr[0]}-${theme}.${imageArr[1]}`} {...restHeroData} />
            <Features />
            <UseCases />
            <Plans data={plans} planFeaturesLength={8} />
        </>
    );

}

export default Home;