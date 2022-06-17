import { StyledErrorMessage, SelectBox, StyledLabel, StyledInput } from "./style";

const Input = ({inputLabel, type, errorMessage, id, placeholder, htmlFor, value, onChange }) => {
    return (
            <>
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
            <SelectBox>
                <StyledLabel htmlFor={htmlFor}>{inputLabel}</StyledLabel>
                <StyledInput
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </SelectBox>
            </>
    );
}

export default Input ;