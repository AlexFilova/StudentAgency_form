import { SelectBox, StyledLabel, StyledInput } from "./style";

function Input ({inputLabel, type, id, placeholder, htmlFor }) {
    return (
    <SelectBox>
        <StyledLabel htmlFor={htmlFor}>{inputLabel}</StyledLabel>
        <StyledInput
            type={type}
            id={id}
            placeholder={placeholder}
        />
    </SelectBox>
    );
}

export default Input ;