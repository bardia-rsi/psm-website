import { Link } from "./Link";
import { Title } from "./Title";

export interface CTA {
    title: Title;
    subtitle?: Title;
    links: {
        id: number;
        link: Link;
        subtext?: string;
    }[];
    features?: {
        id: number;
        icon: string;
        text: string;
    }[];
}