import { Link } from "../Elements/Link";

export interface Plan {
    id: number;
    variant: "primary" | "secondary";
    name: string;
    price?: {
        regular: number;
        discount?: number;
        description: string;
        per: string;
        period: number;
    };
    description?: string;
    link: Link;
    features: {
        id: number;
        icon?: string;
        content: string;
        disabled: boolean;
    }[];
}