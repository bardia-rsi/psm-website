import { Links } from "./Link";

export interface Hero {
    title: string;
    description?: string;
    links?: Links;
    image?: string;
    center?: boolean;
}