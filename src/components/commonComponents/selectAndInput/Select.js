import { SelectBox, StyledLabel, StyledSelect, StyledErrorMessage } from "./style";

const Select = ({htmlFor, id, selectLabel, placeholder, isSearchable, options, value, onChange, errorMessage}) => {

    return (
        <>
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        <SelectBox>
            <StyledLabel htmlFor={htmlFor}>{selectLabel}</StyledLabel>
            <StyledSelect
                inputId={id}
                classNamePrefix="Select"
                placeholder={placeholder}
                isSearchable={isSearchable}
                options={options}
                value={value}
                onChange={onChange}
            />
        </SelectBox> 
        </>
    );
}

export default Select;