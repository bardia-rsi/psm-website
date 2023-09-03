import type { FC, ReactElement } from "react";
import type { FeaturesPageResources } from "../../types/Data/Pages/Features";
import { useLoaderData } from "react-router-dom";
import Hero from "../../containers/Hero";
import CTA from "../../containers/CTA";
import Sections from "./Sections";
import Questions from "../../containers/Questions";

const Features: FC = (): ReactElement => {

    const { hero, cta, questions } = useLoaderData() as FeaturesPageResources;

    return (
        <>
            <Hero {...hero} />
            <Sections />
            <CTA {...cta} />
            <Questions questions={questions} />
        </>
    );

}

export default Features;