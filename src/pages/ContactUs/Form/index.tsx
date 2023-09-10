import type { FC, ReactElement } from "react";
import type { FormikHelpers } from "formik";
import type { ContactUsFormFields } from "../../../types/Form/ContactUs";
import { useToast } from "../../../hooks/useToast";
import Container from "../../../components/UI/Container";
import Wrapper from "../../../components/UI/Wrapper";
import { Form, Row, Group } from "../../../components/UI/Form";
import Link from "../../../components/UI/Link";
import { contactUs } from "../../../schemas/contactUs";
import Style from "./style.module.scss";

const ContactUsForm: FC = (): ReactElement => {

    const categories: string[] = ["product support", "sales & pricing", "media inquiries", "other"];
    const initialValues: ContactUsFormFields = {
        category: "product support",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        terms: false
    }

    const { addToast } = useToast();

    const submitHandler = (values: ContactUsFormFields, formikHelpers: FormikHelpers<ContactUsFormFields>): void => {
        setTimeout(() => {

            console.log(values);

            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm({ values: initialValues });

            addToast({ content: "Message sent successfully", type: "success", className: Style.toast });

        }, 3000);
    }

    return (
        <Container>
            <Wrapper>
                <Form form={{ autoComplete: "off", noValidate: true }}
                      initialValues={initialValues}
                      validationSchema={contactUs}
                      onSubmit={submitHandler}>
                    <Row>
                        <Group name="category" type="radio" radio={{ labels: categories }} groupClass={Style.radio} />
                        <Group name="category" as="select" select={{ labels: categories }} groupClass={Style.select} />
                    </Row>
                    <Row>
                        <Group name="first name" />
                        <Group name="last name" />
                    </Row>
                    <Row>
                        <Group name="email" />
                    </Row>
                    <Row>
                        <Group name="message" as="textarea" rows={6} />
                    </Row>
                    <Row>
                        <Group name="terms"
                               type="checkbox"
                               label={
                                <>
                                    You accept PSM's
                                    {" "}
                                    <Link type="link" to="/terms-of-service">Terms of Service</Link>.
                                </>
                            }
                        />
                    </Row>
                </Form>
            </Wrapper>
        </Container>
    );

}

export default ContactUsForm;