import type { FC, ReactElement } from "react";
import { useEffect } from "react";
import { useToast } from "../../hooks/useToast";
import TestAccountToastMessage from "../../components/TestAccountToastMessage";
import LoginForm from "./Form";

const Login: FC = (): ReactElement => {

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
            <LoginForm />
        </>
    );

}

export default Login;