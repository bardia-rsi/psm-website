export interface ContactUsFormFields {
    category:  "product support" | "sales & pricing" | "media inquiries" | "other";
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    terms: boolean;
}