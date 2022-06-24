import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {StyledToggleContainer, StyledToggleButton, StyledIconContainer, StyledIconEU, StyledIconUSA, StyledIconCheck} from "./style";
import {ToggleParagraphFont} from "../../../styles/fontStyles";

const BigToggle = ({
    designToggleBtnOne,
    setdesignToggleBtnOne,
    designToggleBtnTwo,
    setdesignToggleBtnTwo,
    onBlurValLocality,
}) => {
    
    const { t } = useTranslation();

    return (
        <StyledToggleContainer>
            <StyledToggleButton
                name='toggleOne'
                type='button'
                design={designToggleBtnOne === true ? 'design' : ''}
                primary={true}
                value='EU'
                onClick={() => {
                    setdesignToggleBtnOne(true);
                    setdesignToggleBtnTwo(false)
                }}
                onBlur={onBlurValLocality}
            >
                <StyledIconContainer design={designToggleBtnOne === true ? 'design' : ''}>
                    <StyledIconEU design={designToggleBtnOne === true ? 'design' : ''}/>
                </StyledIconContainer>
                <ToggleParagraphFont design={designToggleBtnOne === true ? 'design' : ''}>{t('internship.europe')}</ToggleParagraphFont>
                {designToggleBtnOne === true && designToggleBtnTwo === false
                && <StyledIconCheck /> 
                }
            </StyledToggleButton>
            <StyledToggleButton
                name='toggleTwo'
                type='button'
                design={designToggleBtnTwo === true ? 'design' : ''}
                value='USA'
                onClick={() => {
                    setdesignToggleBtnOne(false);
                    setdesignToggleBtnTwo(true)                
                }}
                onBlur={onBlurValLocality}
                >
                <StyledIconContainer design={designToggleBtnTwo === true ? 'design' : ''}>
                    <StyledIconUSA design={designToggleBtnTwo === true ? 'design' : ''} />
                </StyledIconContainer>
                <ToggleParagraphFont design={designToggleBtnTwo === true ? 'design' : ''}>{t('internship.usa')}</ToggleParagraphFont>
                {designToggleBtnOne === false && designToggleBtnTwo === true
                && <StyledIconCheck /> 
                }
            </StyledToggleButton>
        </StyledToggleContainer>
    );
}


BigToggle.propTypes = {
    designToggleBtnOne: PropTypes.bool,
    setdesignToggleBtnOne: PropTypes.func,
    designToggleBtnTwo: PropTypes.bool,
    setdesignToggleBtnTwo: PropTypes.func,
};

export default BigToggle;