import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
    username: Yup.string().lowercase()
        .max(64, "The username is too long. Maximum length is 64 characters.")
        .matches(/^[A-Za-z0-9-_.]+$/, "The username must be alphanumeric and only (._-) characters are allowed.")
        .required("Enter username"),
    email: Yup.string()
        .email("Invalid Email!")
        .max(256, "The email is too long. Maximum length is 256 characters.")
        .required("Enter email"),
    password: Yup.string()
        .min(8, "The password is too short. Minimum length is 8 characters.")
        .max(2048, "The password is too long. Maximum length is 2048 characters.")
        .matches(/[a-z]/g, "The password must contain at least one lowercase letter.")
        .matches(/[A-Z]/g, "The password must contain at least one uppercase letter.")
        .matches(/\d/g, "The password must contain at least one number.")
        .matches(/[^A-Z0-9]/gi, "The password must contain at least one special character.")
        .required("Enter password"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password")], "The password and password confirmation do not match.")
        .required("Enter password confirmation")
});