import type { FC, ReactElement } from "react";
import type { AboutUsPageResources } from "../../types/Data/Pages/AboutUs";
import { useLoaderData } from "react-router-dom";
import Hero from "../../containers/Hero";

const AboutUs: FC = (): ReactElement => {

    const { hero } = useLoaderData() as AboutUsPageResources;

    return (
        <>
            <Hero {...hero}  />
        </>
    );
}

export default AboutUs;