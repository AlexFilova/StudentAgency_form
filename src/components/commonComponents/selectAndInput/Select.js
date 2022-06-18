import PropTypes, {string, array} from 'prop-types';
import {SelectBox, StyledLabel, StyledSelect, StyledErrorMessage} from "./style";

const Select = ({
    htmlFor,
    id,
    selectLabel,
    placeholder,
    isSearchable,
    options,
    value,
    onChange,
    errorMessage,
}) => {

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

Select.propTypes = {
    htmlFor: PropTypes.string,
    id: PropTypes.string,
    selectLabel: PropTypes.string,
    placeholder: PropTypes.string,
    isSearchable: PropTypes.bool,
    options: PropTypes.oneOfType([array, string]),
    value: PropTypes.string,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
};

export default Select;