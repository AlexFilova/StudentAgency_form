import PropTypes, {string, shape} from 'prop-types';
import {useTranslation} from "react-i18next";
import {SubFormTitleFont, SmallTitleFont} from "../../../../styles/fontStyles";
import Select from '../../../commonComponents/selectAndInput/Select';
import {StyledSubFormContainer, StyledDiv, StyledMainImgResponsivePhone} from './style';
import picturePhone from '../../../../images/study_in_broad-for_phone.svg';
import BigToggle from '../../../commonComponents/toggle/BigToggle';
import Time from '../../../commonComponents/time/Time';

const SubformPreferency = ({
    optionsEuCountries,
    optionsUsaStates,
    optionsJobs,
    designToggleBtnOne,
    designToggleBtnTwo,
    setdesignToggleBtnOne,
    setdesignToggleBtnTwo,
    onBlurValLocality,
    valCountry,
    onChangeValCountry,
    valState,
    onChangeValState,
    valWork,
    onChangeValWork,
    onClickValTime,
    btnStates,
    countryError,
    jobError,
    timeError,
    stateError,
}) => {
    
    const { t } = useTranslation();
    
    return (
        <StyledSubFormContainer>
            <SubFormTitleFont>{t('titles.titleSubformFirst')}</SubFormTitleFont>
            <StyledDiv>
            <BigToggle
                designToggleBtnOne={designToggleBtnOne}
                designToggleBtnTwo={designToggleBtnTwo}
                setdesignToggleBtnOne={setdesignToggleBtnOne}
                setdesignToggleBtnTwo={setdesignToggleBtnTwo}
                onBlurValLocality={(e) => onBlurValLocality(e)}
            />
            <div>

            <StyledMainImgResponsivePhone
                src={picturePhone}
                alt={t('imagesAlt.internshipStudy')}
            />
            </div>
            </StyledDiv>
            <div>
                <SmallTitleFont>{t('internship.preferency')}</SmallTitleFont>
                {designToggleBtnOne === true && designToggleBtnTwo === false ?
                     <Select
                     htmlFor={'country'}
                     id={'country'}
                     selectLabel={t('internship.labelCountry')}
                     placeholder={t('internship.palceholderCountry')}
                     isSearchable={true}
                     options={optionsEuCountries}
                     value={valCountry}
                     onChange={onChangeValCountry}
                     errorMessage={countryError}
                     />
                    :
                    <Select
                    htmlFor={'state'}
                    id={'state'}
                    selectLabel={t('internship.labelState')}
                    placeholder={t('internship.palceholderState')}
                    isSearchable={true}
                    options={optionsUsaStates}
                    value={valState}
                    onChange={onChangeValState}
                    errorMessage={stateError}
                    />
                }
                <Select
                    htmlFor={'work'}
                    id={'work'}
                    selectLabel={t('internship.labelWorkArea')}
                    placeholder={t('internship.palceholderWorkArea')}
                    isSearchable={true}
                    options={optionsJobs}
                    value={valWork}
                    onChange={onChangeValWork}
                    errorMessage={jobError}
                    />
            </div>
            <SmallTitleFont>{t('internship.time.timeTitle')}</SmallTitleFont>
            <Time
                onClick={onClickValTime}
                btnStates={btnStates}
                errorMessage={timeError}
            />
        </StyledSubFormContainer>
    );
}

SubformPreferency.propTypes = {
    designToggleBtnOne: PropTypes.bool,
    designToggleBtnTwo: PropTypes.bool,
    setdesignToggleBtnOne: PropTypes.func,
    setdesignToggleBtnTwo: PropTypes.func,
    onBlurValLocality: PropTypes.func,
    valCountry: PropTypes.oneOfType([string, shape({
        label: string,
        value: string
        }),
    ]),
    onChangeValCountry: PropTypes.func,
    valState: PropTypes.oneOfType([string, shape({
        label: string,
        value: string
        }),
    ]),
    onChangeValState: PropTypes.func,
    valWork: PropTypes.oneOfType([string, shape({
        label: string,
        value: string
        }),
    ]),
    onChangeValWork: PropTypes.func,
    onClickValTime: PropTypes.func,
    btnStates: PropTypes.array,
    countryError: PropTypes.string,
    jobError: PropTypes.string,
    timeError: PropTypes.string,
    stateError: PropTypes.string,
};

export default SubformPreferency;