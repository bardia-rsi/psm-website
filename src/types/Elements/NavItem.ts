export interface NavItem {
    url: string;
    text: string;
}

export type NavItems = Array<NavItem & { id: number }>;