import {useState} from 'react';
import {FormWrapper, ProgressBar, ActiveBar, DisActiveBar, StyledButtonWrapper, StyledButton, StyledButtonContainer} from './styles';
import SubFormCheck from '../subform/SubFormCheck';
import SubformPreferency from '../subform/SubformPreferency';
import SubFormPersonalInfo from '../subform/SubFormPersonalInfo';
import { useTranslation } from 'react-i18next';
import { darkgrey, pinkbrown, linearGradientButton, shadowButton } from '../../../../styles/colors';

const Form = () => {

    const { t } = useTranslation();

    const [page, setPage] = useState(0);

    const FormPages = [0, 1, 2];

    const PageDisplay = () => {
        if (page === 0) {
            return <SubformPreferency />
        } else if (page === 1 ) {
            return <SubFormPersonalInfo />
        } else {
            return <SubFormCheck />
        }
}

    const subForm = PageDisplay()

    return (
        <FormWrapper key={FormPages[page]}>
        <ProgressBar>
            {FormPages.map((formPage) => (
                page === formPage ? <ActiveBar key={Math.floor(Math.random()*1000)} /> : <DisActiveBar key={Math.floor(Math.random()*100000)}/>
            ))}
        </ProgressBar>
        {subForm}
            <StyledButtonContainer>
                <StyledButtonWrapper style={{justifyContent: 'start'}}>
                    {page > 0 &&
                        <StyledButton
                        style={{width:'84px', background: `${pinkbrown}`, color: 'inherit'}}
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1)
                        }}
                        >
                            {t('buttons.back')}
                        </StyledButton>
                    }
                </StyledButtonWrapper>
                <StyledButtonWrapper style={{justifyContent: 'end'}}>
                    {page < FormPages.length -1 &&
                        <StyledButton
                        style={{background: page === 0 ? `${linearGradientButton}` : `${darkgrey}`, boxShadow: `${shadowButton}`}}
                            onClick={() => {
                                setPage((currentPage) => currentPage + 1)
                            }}
                        >
                            {t('buttons.next')}
                        </StyledButton>
                    }
                    {page > FormPages.length -2 &&
                        <StyledButton
                            type='submit'
                            style={{width:'164px', background: `${darkgrey}`, boxShadow: `${shadowButton}`}}
                        >
                            {t('buttons.confirmForm')}
                        </StyledButton>
                    }
                </StyledButtonWrapper>
            </StyledButtonContainer>
    </FormWrapper>
    );
}

export default Form;