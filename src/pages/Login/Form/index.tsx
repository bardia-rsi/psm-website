import type { FC, ReactElement } from "react";
import type { FormikHelpers } from "formik";
import type { LoginFormFields } from "../../../types/Form/Login";
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
import { loginSchema } from "../../../schemas/login";
import Style from "./style.module.scss";

const LoginForm: FC = (): ReactElement => {

    const { addToast } = useToast();

    const [cookies, setCookies] = useCookies(["psm_refresh_token", "psm_access_token", "psm_user_data"]);

    const submitHandler = async (values: LoginFormFields, formikHelpers: FormikHelpers<LoginFormFields>): Promise<void> => {
        try {

            const res = await axios.post("http://auth.localhost:8000/login", {
                username: values.emailOrUsername.includes("@") ? undefined : values.emailOrUsername,
                email: values.emailOrUsername.includes("@") ? values.emailOrUsername : undefined,
                password: values.password
            });

            addToast({ content: "Logged in successfully", type: "success" });

            formikHelpers.setSubmitting(false);

            setCookies("psm_access_token", res.data.accessToken, { domain: "localhost", maxAge: 3600 });
            setCookies("psm_refresh_token", res.data.refreshToken, { domain: "localhost", maxAge: 259200 });
            setCookies("psm_user_data", omit(res.data, "accessToken", "refreshToken"), { domain: "localhost", maxAge: 259200 });

            window.location.href = "http://dashboard.localhost:3000";

        } catch (e: any) {

            let message: string;

            console.log(e);

            if (e.response.status === 400) {
                message = e.response.data.message || "Bad request!";
            } else {
                message = "Internal error. Try again later.";
            }

            addToast({ content: message, type: "danger" });

            formikHelpers.setSubmitting(false);

        }
    }

    if (cookies.psm_user_data || cookies.psm_refresh_token || cookies.psm_access_token) {
        window.location.href = "http://dashboard.localhost:3000";
    }

    return (
        <Container className={Style.form_container}>
            <Wrapper className={Style.form_wrapper}>
                <div className={Style.form}>
                    <Logo src="/logo-typography.svg" className={Style.center_logo} />
                    <ContainerTitle className={Style.form_title}>welcome back</ContainerTitle>
                    <p className={Style.subtitle}>
                        Don't have an account?
                        <Link type="link" to="/sign-up" className={Style.link}>Sign up</Link>
                    </p>
                    <Form initialValues={{ emailOrUsername: "", password: "" }}
                          validationSchema={loginSchema}
                          onSubmit={submitHandler}
                          form={{ autoComplete: "off", noValidate: true, className: Style.sign_up_form }}
                          button={{ text: "Login", full: true }}>
                        <Row>
                            <Group name="emailOrUsername" label="email or username" />
                        </Row>
                        <Row>
                            <Group name="password" label="password" type="password" />
                        </Row>
                    </Form>
                    <p className={Style.center}>
                        <Link type="link" to="/forgot-password">Forgot password?</Link>
                    </p>
                </div>
                <div className={Style.img}>
                    <SVG src="/images/login/welcoming.svg" />
                </div>
            </Wrapper>
        </Container>
    );

}

export default LoginForm;