import type { FC, ReactElement } from "react";
import type { QuestionItem } from "../../types/Data/QuestionItem";
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "../../components/UI/Accordion";
import Container from "../../components/UI/Container";
import Wrapper from "../../components/UI/Wrapper";
import ContainerTitle from "../../components/UI/ContainerTitle";

interface Props {
    questions: QuestionItem[];
    centerTitle?: boolean;
}
const Questions: FC<Props> = ({ questions, centerTitle = false }): ReactElement => {
    return (
        <Container>
            <Wrapper>
                <ContainerTitle center={centerTitle}>Frequently questions</ContainerTitle>
                <Accordion>
                    {
                        questions.map(({ id, question, answer }) => (
                            <AccordionItem key={id}>
                                <AccordionHeader id={id}>{ question }</AccordionHeader>
                                <AccordionBody id={id}><p>{ answer }</p></AccordionBody>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </Wrapper>
        </Container>
    );
}

export default Questions;