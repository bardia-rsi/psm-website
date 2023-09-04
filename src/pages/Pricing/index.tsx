import type { FC, ReactElement } from "react";
import type { PricingPageResources } from "../../types/Data/Pages/Pricing";
import { useLoaderData } from "react-router-dom";
import Plans from "../../containers/Plans";
import CompareTable from "./compareTable";
import Questions from "../../containers/Questions";

const Pricing: FC = (): ReactElement => {

    const { plans, questions } = useLoaderData() as PricingPageResources;

    return (
        <>
            <Plans data={plans} />
            <CompareTable />
            <Questions questions={questions} centerTitle={true} />
        </>
    );

}

export default Pricing;