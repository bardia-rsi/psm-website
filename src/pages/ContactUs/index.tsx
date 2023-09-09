import type { FC, ReactElement } from "react";
import type { ContactUsPageResources } from "../../types/Data/Pages/ContactUs";
import { useLoaderData } from "react-router-dom";
import Hero from "../../containers/Hero";

const ContactUs: FC = (): ReactElement => {

    const { hero } = useLoaderData() as ContactUsPageResources;

    return (
        <>
            <Hero {...hero} />
        </>
    );

}

export default ContactUs;