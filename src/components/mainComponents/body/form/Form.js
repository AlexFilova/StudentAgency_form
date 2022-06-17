import {useState, useEffect} from 'react';
import {
    defaultValuesForm,
    defaultValuesTimeButton,
    FormPages,
} from '../../../../utils/common/constants'
import {getKeyFormValues,
        checkIfEveryElementIsTrue
} from '../../../../utils/common/functions'
import {validateFirstPage, validateSecondPage} from '../../../../utils/common/validations'
import {FormWrapper, ProgressBar, ActiveBar, DisActiveBar, StyledButtonWrapper, StyledButton, StyledNextButton, StyledButtonContainer} from './styles';
import SubFormCheck from '../subform/SubFormCheck';
import SubformPreferency from '../subform/SubformPreferency';
import SubFormPersonalInfo from '../subform/SubFormPersonalInfo';
import { useTranslation } from 'react-i18next';

const Form = () => {

    const { t } = useTranslation();

    const [formValues, setFormValues] = useState(defaultValuesForm);
    const [designToggleBtnOne, setdesignToggleBtnOne] = useState(true);
    const [designToggleBtnTwo, setdesignToggleBtnTwo] = useState(false);
    const [btnStates, setBtnStates] = useState(defaultValuesTimeButton); 
    const [firstPageErrors, setFirstPageErrors] = useState({});
    const [secondPageErrors, setSecondPageErrors] = useState({});
    const [page, setPage] = useState(0);
    const [isClicked, setIsClicked] = useState(false)

    const noErrorsPageOne = Object.keys(firstPageErrors).length === 0;
    const noErrorsPageTwo = Object.keys(secondPageErrors).length === 0;

    const missingCoutry = t('errorMessages.missingCoutry');
    const missingJob = t('errorMessages.missingJob');
    const missingTime = t('errorMessages.missingTime');
    const missingName = t('errorMessages.missingName');
    const missingLastName = t('errorMessages.missingLastName');
    const missingEmail = t('errorMessages.missingEmail');
    const invalidFormatName = t('errorMessages.invalidFormatName');
    const invalidFormatLastName = t('errorMessages.invalidFormatLastName');
    const invalidFormatEmail = t('errorMessages.invalidFormatEmail');
    const invalidFormatPhone = t('errorMessages.invalidFormatPhone');

    useEffect(() => {
        if(page === 0 && isClicked === true && noErrorsPageOne) {
            setPage(currentPage => (currentPage + 1))
            setIsClicked(false)
        }
        if(page === 1 && isClicked === true && noErrorsPageTwo) {
            setPage(currentPage => (currentPage + 1))
            setIsClicked(false)
        }
    }, [isClicked, noErrorsPageOne, noErrorsPageTwo, page])

    useEffect(() => {
        if(formValues.phone === undefined) {
            setFormValues(prevState => (
                {...prevState, 'phone': defaultValuesForm.phone}
            ))
        }
    }, [formValues.phone])

    const handleToggleButtonEvent = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
            ))
    }

    const handleChangeTimeBtn = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
            ))

        const timeId = e.target.id;
        const truthyFalsyLogic = btnStates.map(obj => ({...obj, btnBoolean: timeId.includes(obj.id)}));
        setBtnStates (truthyFalsyLogic);
    }

    const handleToggleRelatedEvent = (value, accessorOne, accessorTwo) => {
        setFormValues(prevState => ({
            ...prevState, [accessorOne]: value
         }))
        setFormValues(prevState => ({
            ...prevState, [accessorTwo]: ''
         }))
    }

    const handleEventValue = (value, accessor) => {
        setFormValues(prevState => ({
           ...prevState, [accessor]: value
        }))
      }

    const handleEventTargetValue = (e, accessor) => {
    setFormValues(prevState => (
        {...prevState, [accessor]: e.target.value}
        ))
    }

    const goToNext = () => {
        if (page === 0) {
            setFirstPageErrors(validateFirstPage(formValues, missingCoutry, missingJob, missingTime))
            
            if (checkIfEveryElementIsTrue(getKeyFormValues(formValues,0,2,3,5)) === true
                || checkIfEveryElementIsTrue(getKeyFormValues(formValues,0,1,2,5)) === true) {

                setIsClicked(true)
            }
        }
        if (page === 1) {
            setSecondPageErrors(validateSecondPage(
                formValues,
                missingName,
                missingLastName,
                missingEmail,
                invalidFormatName,
                invalidFormatLastName,
                invalidFormatEmail,
                invalidFormatPhone,
                ))
            
            if (checkIfEveryElementIsTrue(getKeyFormValues(formValues,5,8)) === true && formValues.phone.length > 6) {

                setIsClicked(true)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const PageDisplay = () => {
        if (page === 0) {
            return <SubformPreferency
                        designToggleBtnOne={designToggleBtnOne}
                        designToggleBtnTwo={designToggleBtnTwo}
                        setdesignToggleBtnOne={setdesignToggleBtnOne}
                        setdesignToggleBtnTwo={setdesignToggleBtnTwo}
                        onBlurValLocality={(e) => handleToggleButtonEvent(e, 'locality')}
                        valCountry={formValues.localitySpecificationEu}
                        onChangeValCountry={(e) => handleToggleRelatedEvent(e, 'localitySpecificationEu', 'localitySpecificationUsa')}
                        valState={formValues.localitySpecificationUsa}
                        onChangeValState={(e) => handleToggleRelatedEvent(e, 'localitySpecificationUsa', 'localitySpecificationEu')}
                        valWork={formValues.job}
                        onChangeValWork={(e) => handleEventValue(e, 'job')}
                        onClickValTime={(e) => handleChangeTimeBtn(e, 'time')}
                        btnStates={btnStates}
                        countryError={firstPageErrors.localitySpecificationEu}
                        stateError={firstPageErrors.localitySpecificationUsa}
                        jobError={firstPageErrors.job}
                        timeError={firstPageErrors.time}
            />
        } else if (page === 1 ) {
            return <SubFormPersonalInfo 
                        valName={formValues.name}
                        onChangeValName={(e) => handleEventTargetValue(e, 'name')}
                        valLastname={formValues.lastname}
                        onChangeValLastname={(e) => handleEventTargetValue(e, 'lastname')}
                        valEmail={formValues.email}
                        onChangeValEmail={(e) => handleEventTargetValue(e, 'email')}
                        valPhone={formValues.phone}
                        onChangeValPhone={(e) => handleEventValue(e, 'phone')}
                        btnStates={btnStates}
                        nameError={secondPageErrors.name}
                        lastnameError={secondPageErrors.lastname}
                        emailError={secondPageErrors.email}
                        phoneError={secondPageErrors.phone}
            />
        } else {
            return <SubFormCheck
                        valLocality={formValues.locality}
                        valCountry={formValues.localitySpecificationEu}
                        valState={formValues.localitySpecificationUsa}
                        valWork={formValues.job}
                        valTime={formValues.time}
                        valName={formValues.name}
                        valLastname={formValues.lastname}
                        valEmail={formValues.email}
                        valPhone={formValues.phone}
                />
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
        <form onSubmit={handleSubmit}>
            {subForm}
            <StyledButtonContainer>
                <StyledButtonWrapper>
                    {page > 0 &&
                        <StyledButton
                        backBtn
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1)
                            setIsClicked(false)
                        }}
                        >
                            {t('buttons.back')}
                        </StyledButton>
                    }
                </StyledButtonWrapper>
                <StyledButtonWrapper
                endJustified
                >
                    {page < FormPages.length -1 &&
                        <StyledNextButton
                        nextBtn
                            onClick={() => {
                                goToNext()
                            }}
                        >
                            {t('buttons.next')}
                        </StyledNextButton>
                    }
                    {page > FormPages.length -2 &&
                        <StyledButton
                            submitBtn
                            type='submit'
                        >
                            {t('buttons.confirmForm')}
                        </StyledButton>
                    }
                </StyledButtonWrapper>
            </StyledButtonContainer>
        </form>
    </FormWrapper>
    );
}

export default Form;