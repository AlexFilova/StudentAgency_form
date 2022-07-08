import PropTypes, {string, array, shape} from 'prop-types';
import {StyledSelectBox, StyledLabel, StyledSelect, StyledErrorMessage} from "./style";

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
        <StyledSelectBox>
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
        </StyledSelectBox> 
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
    value: PropTypes.oneOfType([string, shape({
        label: string,
        value: string
        }),
    ]),
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
};

export default Select;