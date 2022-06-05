import { ErrorMessageContainer, ErrorMessageWrapper } from "./style";
import { Triangle } from "../../styles/shapes";
import {MessageParagraphFont} from '../../styles/fontStyles'

interface ErrorMessageProps {
    children?: React.ReactNode;
}

const ErrorMessage = ({children}:ErrorMessageProps) => {
    return (
        <ErrorMessageContainer>
            <Triangle />
            <ErrorMessageWrapper>
                <MessageParagraphFont>{children}</MessageParagraphFont>
            </ErrorMessageWrapper>
        </ErrorMessageContainer>
    );
}

export default ErrorMessage;