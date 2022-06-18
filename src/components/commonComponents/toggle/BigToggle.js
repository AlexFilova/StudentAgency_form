import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {ToggleConatiner, StyledToggleButton, IconContainer, IconEU, IconUSA, IconCheck} from "./style";
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
        <ToggleConatiner>
            <StyledToggleButton
                name='toggleOne'
                design={designToggleBtnOne === true ? 'design' : ''}
                primary={true}
                value='EU'
                onClick={() => {
                    setdesignToggleBtnOne(true);
                    setdesignToggleBtnTwo(false)
                }}
                onBlur={onBlurValLocality}
            >
                <IconContainer design={designToggleBtnOne === true ? 'design' : ''}>
                    <IconEU design={designToggleBtnOne === true ? 'design' : ''}/>
                </IconContainer>
                <ToggleParagraphFont design={designToggleBtnOne === true ? 'design' : ''}>{t('internship.europe')}</ToggleParagraphFont>
                {designToggleBtnOne === true && designToggleBtnTwo === false
                && <IconCheck /> 
                }
            </StyledToggleButton>
            <StyledToggleButton
                name='toggleTwo'
                design={designToggleBtnTwo === true ? 'design' : ''}
                value='USA'
                onClick={() => {
                    setdesignToggleBtnOne(false);
                    setdesignToggleBtnTwo(true)                
                }}
                onBlur={onBlurValLocality}
                >
                <IconContainer design={designToggleBtnTwo === true ? 'design' : ''}>
                    <IconUSA design={designToggleBtnTwo === true ? 'design' : ''} />
                </IconContainer>
                <ToggleParagraphFont design={designToggleBtnTwo === true ? 'design' : ''}>{t('internship.usa')}</ToggleParagraphFont>
                {designToggleBtnOne === false && designToggleBtnTwo === true
                && <IconCheck /> 
                }
            </StyledToggleButton>

        </ToggleConatiner>
    );
}


BigToggle.propTypes = {
    designToggleBtnOne: PropTypes.bool,
    setdesignToggleBtnOne: PropTypes.func,
    designToggleBtnTwo: PropTypes.bool,
    setdesignToggleBtnTwo: PropTypes.func,
};

export default BigToggle;