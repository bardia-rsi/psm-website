import * as Yup from "yup";

export const contactUs = Yup.object().shape({
    category: Yup.string().lowercase()
        .oneOf([ "product support", "sales & pricing", "media inquiries", "other" ], "Category must be one of the following categories: Product Support, Sales & Pricing, Media Inquiries, and Other")
        .required("You must select a category."),
    firstName: Yup.string()
        .min(3, "The first name is too short. Minimum Length is 3 characters.")
        .max(50, "The first name is too long. Maximum length is 50 characters.")
        .matches(/^[A-Za-z\s]+$/, "The first name must only contain alphabet characters.")
        .required("Enter first name"),
    lastName: Yup.string()
        .min(3, "The last name is too short. Minimum Length is 3 characters.")
        .max(50, "The last name is too long. Maximum length is 50 characters.")
        .matches(/^[A-Za-z\s]+$/, "The last name must only contain alphabet characters.")
        .required("Enter last name"),
    email: Yup.string()
        .email("Invalid Email!")
        .required("Enter email"),
    message: Yup.string()
        .min(64, "The message is too short. Minimum length is 64 characters.")
        .max(4096, "The message is too long. Maximum length is 4096 characters.")
        .required("Enter message"),
    terms: Yup.boolean()
        .isTrue("You must accept PSM's Terms of Use.")
        .required("You must accept PSM's Terms of Use.")
});