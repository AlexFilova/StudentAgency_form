import PropTypes from 'prop-types';
import {StyledErrorMessage, StyledSelectBox, StyledLabel, StyledInput} from "./style";

const Input = ({
    inputLabel,
    type,
    errorMessage,
    id,
    placeholder,
    htmlFor,
    value,
    onChange,
}) => {
    
    return (
            <>
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
            <StyledSelectBox>
                <StyledLabel htmlFor={htmlFor}>{inputLabel}</StyledLabel>
                <StyledInput
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </StyledSelectBox>
            </>
    );
}

Input.propTypes = {
    inputLabel: PropTypes.string,
    type: PropTypes.string,
    errorMessage: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    htmlFor: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;