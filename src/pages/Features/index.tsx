import type { FC, ReactElement } from "react";
import type { FeaturesPageResources } from "../../types/Data/Pages/Features";
import { useLoaderData } from "react-router-dom";
import Hero from "../../containers/Hero";

const Features: FC = (): ReactElement => {

    const { hero } = useLoaderData() as FeaturesPageResources;

    return (
        <>
            <Hero {...hero} />
        </>
    );

}

export default Features;