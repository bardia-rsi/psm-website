import type { FC, ReactElement } from "react";
import { useEffect } from "react";
import { useToast } from "../../hooks/useToast";
import TestAccountToastMessage from "../../components/TestAccountToastMessage";
import SignUpForm from "./Form";

const SignUp: FC = (): ReactElement => {

    const { addToast } = useToast();

    useEffect(() => {
        addToast({
            content: <TestAccountToastMessage />,
            type: "info",
            autoRemove: false,
        });
    }, []);

    return (
        <>
            <SignUpForm />
        </>
    );

}

export default SignUp;