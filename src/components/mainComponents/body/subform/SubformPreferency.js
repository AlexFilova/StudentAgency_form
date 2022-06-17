import {useState, useEffect} from 'react';
import { SubFormTitleFont, SmallTitleFont } from "../../../../styles/fontStyles";
import {fetchData} from '../../../../api/apiCall';
import { useTranslation } from "react-i18next";
import Select from '../../../commonComponents/selectAndInput/Select';
import { SubFormContainer } from './style';
import BigToggle from '../../../commonComponents/toggle/BigToggle';
import Time from '../../../commonComponents/time/Time';

const SubformPreferency = ({
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

    const [designToggleBtnOne, setdesignToggleBtnOne] = useState(true);
    const [designToggleBtnTwo, setdesignToggleBtnTwo] = useState(false);
    const [optionsEuCountries, setOptionsEuCountries] = useState('');
    const [optionsUsaStates, setOptionsUsaStates] = useState('');
    const [optionsJobs, setOptionsJobs] = useState('');

    
    useEffect(() => {
        const getData = async () => {
        const data = await fetchData();
        const euCountries = data[0];
        const arrayEuCountries = Object.values(euCountries);
        const optionsAttributesEuCountries =
            arrayEuCountries[0].map(euCountry => ({
                value: euCountry,
                label: euCountry,
            }))
            setOptionsEuCountries(optionsAttributesEuCountries);
        const usaStates = data[1];
        const arrayUsaStates = Object.values(usaStates);
        const optionsAttributesUsaStates =
            arrayUsaStates[0].map(usaState => ({
                value: usaState,
                label: usaState,
            }))
            setOptionsUsaStates(optionsAttributesUsaStates);
        const jobs = data[2];
        const arrayJobs = Object.values(jobs);
        const optionsAttributesJobs =
            arrayJobs[0].map(job => ({
                value: job,
                label: job,
            }))
            setOptionsJobs(optionsAttributesJobs);
        };
        getData()
      },[]);
    
    return ( 
        <SubFormContainer>
            <SubFormTitleFont>{t('titles.titleSubformFirst')}</SubFormTitleFont>
            <BigToggle
                designToggleBtnOne={designToggleBtnOne}
                designToggleBtnTwo={designToggleBtnTwo}
                setdesignToggleBtnOne={setdesignToggleBtnOne}
                setdesignToggleBtnTwo={setdesignToggleBtnTwo}
                onBlurValLocality={onBlurValLocality}
            />
            <div>
                <SmallTitleFont>{t('internship.preferency')}</SmallTitleFont>
                {designToggleBtnOne === true && designToggleBtnTwo === false ?
                     <Select
                     htmlFor={'country'}
                     id={'country'}
                     selectLabel={t('internship.labelCountry')}
                     placeholder={t('internship.palceholderCountry')}
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
        {/* <StyledNextButton
            onClick={goToNext}
        >
            {t('buttons.next')}</StyledNextButton> */}
        </SubFormContainer>
    );
}

export default SubformPreferency;