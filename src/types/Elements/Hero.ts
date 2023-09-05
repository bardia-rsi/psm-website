import { Links } from "./Link";

export interface Hero {
    background?: "transparent" | "primary" | "secondary";
    title: string;
    description?: string;
    links?: Links;
    image?: string;
    center?: boolean;
}