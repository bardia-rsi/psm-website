import type { FC, ReactElement } from "react";
import type { FormikHelpers } from "formik";
import type { SignUpFormFields } from "../../../types/Form/SignUp";
import { useState } from "react";
import SVG from "react-inlinesvg";
import axios from "axios";
import { omit } from "lodash";
import { useCookies } from "react-cookie";
import { useToast } from "../../../hooks/useToast";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import Logo from "../../../components/Logo";
import ContainerTitle from "../../../components/UI/ContainerTitle";
import { Form, Row, Group } from "../../../components/UI/Form";
import Link from "../../../components/UI/Link";
import PasswordStrength from "../../../components/PasswordStrength";
import { signUpSchema } from "../../../schemas/signUp";
import Style from "./style.module.scss";

const SignUpForm: FC = (): ReactElement => {

    const [password, setPassword] = useState<string>("");

    const { addToast } = useToast();

    const [cookies, setCookies] = useCookies(["psm_user_data", "psm_refresh_token", "psm_access_token"]);

    const submitHandler = async (values: SignUpFormFields, formikHelpers: FormikHelpers<SignUpFormFields>): Promise<void> => {
        try {

            const res = await axios.post(`${process.env.REACT_APP_API_AUTH_URL}/sign-up`, {
                login: {
                    ...omit(values, "password", "confirmationPassword"),
                    password: {
                        current: {
                            content: values.password
                        },
                        repeated: values.passwordConfirmation
                    }
                }
            });

            addToast({ content: "Account created successfully", type: "success" });

            formikHelpers.setSubmitting(false);

            setCookies(
                "psm_access_token",
                res.data.accessToken,
                { domain: `.${process.env.REACT_APP_WEBSITE_DOMAIN}`, maxAge: 3600 }
            );
            setCookies(
                "psm_refresh_token",
                res.data.refreshToken,
                { domain: `.${process.env.REACT_APP_WEBSITE_DOMAIN}`, maxAge: 259200 }
            );
            setCookies(
                "psm_user_data",
                omit(res.data, "accessToken", "refreshToken"),
                { domain: `.${process.env.REACT_APP_WEBSITE_DOMAIN}`, maxAge: 259200 }
            );

            window.location.href = process.env.REACT_APP_DASHBOARD_URL;

        } catch (e: any) {

            let message: string;

            if (e.response.status === 409) {
                message = e.response.data.message;
            } else if (e.response.status === 400) {
                message = "Bad request!";
            } else {
                message = "Internal error. Try again later.";
            }

            addToast({ content: message, type: "danger" })

            formikHelpers.setSubmitting(false);

        }
    }

    if (cookies.psm_user_data || cookies.psm_refresh_token || cookies.psm_access_token) {
        window.location.href = process.env.REACT_APP_DASHBOARD_URL;
    }

    return (
        <Container className={Style.form_container}>
            <Wrapper className={Style.form_wrapper}>
                <div className={Style.form}>
                    <div className={Style.center_logo}>
                        <Logo src="/logo-typography.svg" />
                    </div>
                    <ContainerTitle className={Style.form_title}>create an account</ContainerTitle>
                    <p className={Style.subtitle}>
                        Already have an account?
                        <Link type="link" to="/login" className={Style.link}>Login</Link>
                    </p>
                    <Form initialValues={{ passwordConfirmation: "", email: "", password: "", username: "" }}
                          validationSchema={signUpSchema}
                          onSubmit={submitHandler}
                          form={{ autoComplete: "off", noValidate: true, className: Style.sign_up_form }}
                          button={{ text: "Create", full: true }}>
                        <Row>
                            <Group name="username" />
                        </Row>
                        <Row>
                            <Group name="email" type="email" />
                        </Row>
                        <Row>
                            <Group name="password"
                                   label="password"
                                   type="password"
                                   onChange={(e) => setPassword(e.target.value)}>
                                <PasswordStrength password={password} />
                            </Group>
                        </Row>
                        <Row>
                            <Group name="passwordConfirmation" label="confirm password" type="password" />
                        </Row>
                    </Form>
                    <p className={Style.subtitle}>
                        By signing up, you agree with our&nbsp;
                        <Link type="link" to="/terms-of-service">Terms of Service</Link>
                        &nbsp;and&nbsp;
                        <Link type="link" to="/privacy-policy">Privacy Policy</Link>
                        .
                    </p>
                </div>
                <div className={Style.img}>
                    <SVG src="/images/sign-up/welcome.svg" />
                </div>
            </Wrapper>
        </Container>
    );

}

export default SignUpForm;