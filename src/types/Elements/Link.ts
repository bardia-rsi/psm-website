import { Types as ButtonTypes, Variants as ButtonVariants } from "./Button";

export type Types = ButtonTypes | "link" | "simple";

export type Variants = ButtonVariants;

export type Link = {
    url: string;
    type: Types;
    variant?: Variants;
    text: string;
}

export type Links = Array<Link & { id: number }>