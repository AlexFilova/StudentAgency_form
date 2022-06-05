import { SelectBox, StyledLabel, StyledSelect } from "./style";

const Select = ({htmlFor, id, selectLabel, placeholder, isSearchable, options}) => {

    return (
        <SelectBox>
            <StyledLabel htmlFor={htmlFor}>{selectLabel}</StyledLabel>
            <StyledSelect
                inputId={id}
                classNamePrefix="Select"
                placeholder={placeholder}
                isSearchable={isSearchable}
                options={options}
            />
        </SelectBox> );
}

export default Select;