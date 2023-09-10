import type { FC, ReactElement } from "react";
import type { ContactUsPageResources } from "../../types/Data/Pages/ContactUs";
import { useLoaderData } from "react-router-dom";
import Hero from "../../containers/Hero";
import ContactUsForm from "./Form";

const ContactUs: FC = (): ReactElement => {

    const { hero } = useLoaderData() as ContactUsPageResources;

    return (
        <>
            <Hero {...hero} />
            <ContactUsForm />
        </>
    );

}

export default ContactUs;