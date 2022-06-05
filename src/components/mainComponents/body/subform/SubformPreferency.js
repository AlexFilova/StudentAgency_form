import {useState} from 'react';
import { SubFormTitleFont, SmallTitleFont } from "../../../../styles/fontStyles";
import { useTranslation } from "react-i18next";
import Select from '../../../commonComponents/selectAndInput/Select';
import { SubFormContainer } from './style';
import BigToggle from '../../../commonComponents/toggle/BigToggle';
import Price from '../../../commonComponents/price/Price';
import ErrorMessage from '../../../commonComponents/ErrorMessage';

const SubformPreferency = () => {

    console.log('render Sunform');
    const { t } = useTranslation();

    const [designToggleBtnOne, setdesignToggleBtnOne] = useState(true);
    const [designToggleBtnTwo, setdesignToggleBtnTwo] = useState(false);
    
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
                     // options={posts.shelters.map((item: any) => ({
                     //     option: item.id,
                     //     label: item.name
                     //     }))
                     // }
                     />
                    :
                    <Select
                    htmlFor={'state'}
                    id={'state'}
                    selectLabel={t('internship.labelState')}
                    placeholder={t('internship.palceholderState')}
                    // options={posts.shelters.map((item: any) => ({
                    //     option: item.id,
                    //     label: item.name
                    //     }))
                    // }
                    />
                }
                <Select
                    htmlFor={'work'}
                    id={'work'}
                    selectLabel={t('internship.labelWorkArea')}
                    placeholder={t('internship.palceholderWorkArea')}
                    />
                <ErrorMessage>{t('errorMessages.missingCoutry')}</ErrorMessage>
            </div>
            <SmallTitleFont>{t('internship.time.timeTitle')}</SmallTitleFont>
            <Price />
        </SubFormContainer>
    );
}

export default SubformPreferency;