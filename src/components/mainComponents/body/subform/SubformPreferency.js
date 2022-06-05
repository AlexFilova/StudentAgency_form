import {useState, useEffect} from 'react';
import { SubFormTitleFont, SmallTitleFont } from "../../../../styles/fontStyles";
import {fetchData} from '../../../../api/apiCall';
import { useTranslation } from "react-i18next";
import Select from '../../../commonComponents/selectAndInput/Select';
import { SubFormContainer } from './style';
import BigToggle from '../../../commonComponents/toggle/BigToggle';
import Price from '../../../commonComponents/price/Price';
import ErrorMessage from '../../../commonComponents/ErrorMessage';

const SubformPreferency = () => {

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
                     />
                    :
                    <Select
                    htmlFor={'state'}
                    id={'state'}
                    selectLabel={t('internship.labelState')}
                    placeholder={t('internship.palceholderState')}
                    options={optionsUsaStates}
                    />
                }
                <Select
                    htmlFor={'work'}
                    id={'work'}
                    selectLabel={t('internship.labelWorkArea')}
                    placeholder={t('internship.palceholderWorkArea')}
                    options={optionsJobs}
                    />
                <ErrorMessage>{t('errorMessages.missingCoutry')}</ErrorMessage>
            </div>
            <SmallTitleFont>{t('internship.time.timeTitle')}</SmallTitleFont>
            <Price />
        </SubFormContainer>
    );
}

export default SubformPreferency;