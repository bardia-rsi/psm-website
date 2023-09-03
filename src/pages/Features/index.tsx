import type { FC, ReactElement } from "react";
import type { FeaturesPageResources } from "../../types/Data/Pages/Features";
import { useLoaderData } from "react-router-dom";
import Hero from "../../containers/Hero";
import CTA from "../../containers/CTA";
import Sections from "./Sections";

const Features: FC = (): ReactElement => {

    const { hero, cta } = useLoaderData() as FeaturesPageResources;

    return (
        <>
            <Hero {...hero} />
            <Sections />
            <CTA {...cta} />
        </>
    );

}

export default Features;