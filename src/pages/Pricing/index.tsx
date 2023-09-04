import type { FC, ReactElement } from "react";
import type { PricingPageResources } from "../../types/Data/Pages/Pricing";
import { useLoaderData } from "react-router-dom";
import Plans from "../../containers/Plans";
import CompareTable from "./compareTable";

const Pricing: FC = (): ReactElement => {

    const { plans } = useLoaderData() as PricingPageResources;

    return (
        <>
            <Plans data={plans} />
            <CompareTable />
        </>
    );

}

export default Pricing;