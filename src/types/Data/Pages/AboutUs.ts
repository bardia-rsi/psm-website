import { Hero } from "../../Elements/Hero";
import { Title } from "../../Elements/Title";

export interface AboutUsPageResources {
    hero: Hero;
    pillars: {
        title: Title;
        image: string;
        items: {
            id: number;
            icon: string;
            title: string;
            description: string;
        }[];
    };
    customers: {
        title: Title;
        items: {
            id: number;
            icon: string;
            username: string;
            date: string;
            title: string;
            description: string;
        }[];
    }
}