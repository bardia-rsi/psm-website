import { NavItems } from "../Elements/NavItem";
import { Link, Links } from "../Elements/Link";

export interface WebsiteSettings {
    logo: string;
    navbar: {
        items: NavItems;
        themeToggleButton: boolean;
        links: Links;
    };
    drawer: {
        items: NavItems;
        themeToggleButton: boolean;
    };
    footer: {
        sections: {
            id: number;
            title: string;
            baseUrl?: string;
            links: Array<Omit<Link, "type" | "variant"> & { id: number }>;
        }[];
        copyrights: string;
        socialMedia: {
            text: string;
            icons: {
                id: number;
                url: string;
                name: string;
            }[];
        };
    };
}