import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    emailOrUsername: Yup.string().required("Enter email or username"),
    password: Yup.string().required("Enter password"),
});