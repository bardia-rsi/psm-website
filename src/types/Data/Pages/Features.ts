import { Hero } from "../../Elements/Hero";
import { Title } from "../../Elements/Title";
import { CTA } from "../../Elements/CTA";
import { QuestionItem } from "../QuestionItem";


export interface FeaturesPageResources {
    hero: Hero;
    sections: {
        title: Title;
        cards: {
            id: number;
            image: string;
            title: string;
            premium: boolean;
            description: string;
        }[];
    }[];
    cta: CTA;
    questions: QuestionItem[];
}