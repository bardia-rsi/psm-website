import { Hero } from "../../Elements/Hero";
import { Title } from "../../Elements/Title";
import { Link } from "../../Elements/Link";
import { Plan } from "../Plan";

export interface HomePageResources {
    hero: Hero;
    features: {
        title: Title;
        sections: {
            id: number;
            title: string;
            description: string;
            image: string;
            reverse: boolean;
        }[];
        link: Link;
    };
    useCases: {
        title: Title;
        tabs: {
            id: number;
            label: string;
            description: string;
            image: string;
        }[];
        link: Link;
    };
    plans: {
        title: Title;
        slides: Plan[];
        link: Link;
    };
}