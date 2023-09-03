import { Title } from "../../Elements/Title";
import { Plan } from "../Plan";
import { Link } from "../../Elements/Link";
import { CTA } from "../../Elements/CTA";
import { QuestionItem } from "../QuestionItem";

export interface PricingPageResources {
    plans: {
        title: Title;
        slides: Plan[];
    };
    compareTable: {
        title: Title;
        table: {
            labels: {
                id: number;
                label: string;
                subtext?: string;
            }[];
            rows: {
                id: number;
                items: {
                    id: number;
                    link?: { link: Link; subtext: string };
                    text?: string;
                    feature: boolean;
                }[];
            }[];
        };
    };
    cta: CTA;
    questions: QuestionItem[];
}