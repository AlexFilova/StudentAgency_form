import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {
    StyledToggle,
    StyledToggleButtonWrapper,
    StyledToggleContentWrapper,
    StyledToggleButton,
    StyledToggleContent,
    StyledIconContainer,
    ToggleParagraphFont,
    StyledIconEU,
    StyledIconUSA,
    StyledIconCheck
} from "./style";

const BigToggle = ({
    designToggleBtnOne,
    setdesignToggleBtnOne,
    designToggleBtnTwo,
    setdesignToggleBtnTwo,
    onBlurValLocality,
}) => {
    
    const { t } = useTranslation();

    return (
        <StyledToggle>
            <StyledToggleContentWrapper>
                <StyledToggleContent
                    primary
                    design={designToggleBtnOne === true ? 'design' : ''}
                    >
                    <StyledIconContainer  design={designToggleBtnOne === true ? 'design' : ''}>
                        <StyledIconEU  design={designToggleBtnOne === true ? 'design' : ''}/>
                    </StyledIconContainer>
                    <ToggleParagraphFont design={designToggleBtnOne === true ? 'design' : ''}>{t('internship.europe')}</ToggleParagraphFont>
                    {designToggleBtnOne === true && designToggleBtnTwo === false
                    && <StyledIconCheck /> 
                    }
                </StyledToggleContent>
                <StyledToggleContent
                    design={designToggleBtnTwo === true ? 'design' : ''}
                >
                    <StyledIconContainer design={designToggleBtnTwo === true ? 'design' : ''}>
                        <StyledIconUSA design={designToggleBtnTwo === true ? 'design' : ''} />
                    </StyledIconContainer>
                    <ToggleParagraphFont design={designToggleBtnTwo === true ? 'design' : ''}>{t('internship.usa')}</ToggleParagraphFont>
                    {designToggleBtnOne === false && designToggleBtnTwo === true
                    && <StyledIconCheck /> 
                    }
                </StyledToggleContent>
            </StyledToggleContentWrapper>
            <StyledToggleButtonWrapper>
                <StyledToggleButton
                    name='toggleOne'
                    type='button'
                    primary
                    value='EU'
                    onClick={(e) => {
                        onBlurValLocality(e);
                        setdesignToggleBtnOne(true);
                        setdesignToggleBtnTwo(false);
                    }}
                >
                </StyledToggleButton>
                <StyledToggleButton
                    name='toggleTwo'
                    type='button'
                    value='USA'
                    onClick={(e) => {
                        onBlurValLocality(e);               
                        setdesignToggleBtnOne(false);
                        setdesignToggleBtnTwo(true);
                    }}
                    >
                </StyledToggleButton>
            </StyledToggleButtonWrapper>
        </StyledToggle>
    );
};


BigToggle.propTypes = {
    designToggleBtnOne: PropTypes.bool,
    setdesignToggleBtnOne: PropTypes.func,
    designToggleBtnTwo: PropTypes.bool,
    setdesignToggleBtnTwo: PropTypes.func,
};

export default BigToggle;