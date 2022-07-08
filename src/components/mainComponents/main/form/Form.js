import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {fetchData, postData} from '../../../../api/apiCall';
import {useTranslation} from 'react-i18next';
import {
    DEFAULT_VALUES_FORM,
    DEFAULT_VALUES_TIME,
    FORM_PAGES,
    USER_ID,
} from '../../../../utils/common/constants'
import {getKeyFormValues,
        checkIfEveryElementIsTrue,
        getValueOfValueKey,
} from '../../../../utils/common/functions'
import {validateFirstPage, validateSecondPage, validateThirdPage} from '../../../../utils/common/validations'
import {
    StyledFormWrapper,
    StyledProgressBar,
    StyledActiveBar,
    StyledDisActiveBar,
    StyledButtonWrapper,
    StyledBackButton,
    StyledNextButton,
    StyledButtonContainer,
    StyledConfirmButton} from './styles';
import SubFormCheck from '../subform/SubFormCheck';
import SubformPreferency from '../subform/SubformPreferency';
import SubFormPersonalInfo from '../subform/SubFormPersonalInfo';
import GetApiError from '../../../commonComponents/sideComponents/GetApiError';

const Form = ({headerHeight}) => {

    const { t } = useTranslation();
    
    const [optionsEuCountries, setOptionsEuCountries] = useState('');
    const [optionsUsaStates, setOptionsUsaStates] = useState('');
    const [optionsJobs, setOptionsJobs] = useState('');
    const [formValues, setFormValues] = useState(DEFAULT_VALUES_FORM);
    const [designToggleBtnOne, setdesignToggleBtnOne] = useState(true);
    const [designToggleBtnTwo, setdesignToggleBtnTwo] = useState(false);
    const [btnStates, setBtnStates] = useState(DEFAULT_VALUES_TIME);
    const [firstPageErrors, setFirstPageErrors] = useState({});
    const [secondPageErrors, setSecondPageErrors] = useState({});
    const [thirdPageErrors, setThirdPageErrors] = useState({});
    const [page, setPage] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isFormConfirmed, setIsFormConfirmed] = useState(false);
    const [isApiGetError, setIsApiGetError] = useState(false);
    
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
    const invalidFormatPhoneTooShort = t('errorMessages.invalidFormatPhoneTooShort');
    const invalidFormatPhoneTooLong = t('errorMessages.invalidFormatPhoneTooLong');
    const missingConfirmation = t('errorMessages.confirmationError');
 
    const getData = async () => {
        const data = await fetchData();
        if(data){
            const euCountries = data[0];
            const arrayEuCountries = Object.values(euCountries);
            const optionsAttributesEuCountries =
                arrayEuCountries[0].sort().map(euCountry => ({
                    value: euCountry,
                    label: euCountry,
                }))
                setOptionsEuCountries(optionsAttributesEuCountries);
            const usaStates = data[1];
            const arrayUsaStates = Object.values(usaStates);
            const optionsAttributesUsaStates =
                arrayUsaStates[0].sort().map(usaState => ({
                    value: usaState,
                    label: usaState,
                }))
                setOptionsUsaStates(optionsAttributesUsaStates);
            const jobs = data[2];
            const arrayJobs = Object.values(jobs);
            const optionsAttributesJobs =
                arrayJobs[0].sort().map(job => ({
                    value: job,
                    label: job,
                }))
                setOptionsJobs(optionsAttributesJobs);
                setIsApiGetError(false);
            } else {
                setIsApiGetError(true)
            }
        };

    useEffect(() => {
        getData()
    },[]);

    useEffect(() => {
        window.scroll(0, headerHeight)
    // eslint-disable-next-line
    },[page, isFormConfirmed]);

    useEffect(() => {
        if(page === 0 && isClicked === true && noErrorsPageOne === true) {
            setPage(currentPage => (currentPage + 1))
            setIsClicked(false)
            setIsActive(false)
        }
        if(page === 1 && isClicked === true && noErrorsPageTwo === true) {
            setPage(currentPage => (currentPage + 1))
            setIsClicked(false)
            setIsActive(false)
        }
        if(noErrorsPageOne === false || noErrorsPageTwo === false){
            setIsClicked(false)
            setIsActive(false)
        }
    }, [isClicked, noErrorsPageOne, noErrorsPageTwo, page]);

    useEffect(() => {
        if(page === 0) {
            if (checkIfEveryElementIsTrue(getKeyFormValues(formValues,0,2,3,5)) === true
                || checkIfEveryElementIsTrue(getKeyFormValues(formValues,0,1,2,5)) === true) {
    
                setIsActive(true)
            }
        }
        if(page === 1 && typeof formValues.phone === 'string') {
            if ((checkIfEveryElementIsTrue(getKeyFormValues(formValues,5,8)) === true
                && formValues.phone.length > 12
                && formValues.phone.length < 15)) {
    
                setIsActive(true)
            }
            if (checkIfEveryElementIsTrue(getKeyFormValues(formValues,5,8)) === false ||
                (formValues.phone.length < 13 || formValues.phone.length > 14)) {
    
                setIsActive(false)
            }
        }
    },[formValues, page]);

    useEffect(() => {
    if(formValues.phone === undefined) {
        setFormValues(prevState => (
            {...prevState, 'phone': DEFAULT_VALUES_FORM.phone}
        ))
    }
    }, [formValues.phone, setFormValues]);

    const scrollOnFirstError = (errors) => {
        const firstError = Object.keys(errors)[0];
        const element = document.getElementById(firstError);

        if(element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    };
    scrollOnFirstError(firstPageErrors);
    scrollOnFirstError(secondPageErrors);

    const handleToggleButtonEvent = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
            ))
            if(formValues.locality === 'USA') {
                setFormValues(prevState => (
                    {...prevState, 'localitySpecificationUsa': ''}
                ))
            }
            if(formValues.locality === 'EU') {
                setFormValues(prevState => (
                    {...prevState, 'localitySpecificationEu': ''}
                ))
            }
            setIsActive(false)
    };

    const handleToggleRelatedEvent = (value, accessorOne, accessorTwo) => {
        setFormValues(prevState => (
            {...prevState, [accessorOne]: value}
        ))
        setFormValues(prevState => (
            {...prevState, [accessorTwo]: ''}
        ))

         setIsClicked(false)

        if(firstPageErrors[accessorOne]){
            delete firstPageErrors[accessorOne];
        }
        if(firstPageErrors[accessorTwo]){
            delete firstPageErrors[accessorTwo];
        }
    };

    const handleChangeTimeOptions = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
        ));

        const timeId = e.target.id
        const truthyFalsyLogic = btnStates.map(obj => ({...obj, btnBoolean: timeId.includes(obj.id)}))
        setBtnStates(truthyFalsyLogic);

        if(firstPageErrors[accessor]){
            delete firstPageErrors[accessor]
        }
    };

    const handleEventValue = (value, accessor) => {
        setFormValues(prevState => (
           {...prevState, [accessor]: value}
        ))

        setIsClicked(false)

        if(firstPageErrors[accessor]){
            delete firstPageErrors[accessor];
        }
        if(secondPageErrors[accessor]){
            delete secondPageErrors[accessor]
        }
      };

    const handleEventTargetValue = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
            ))

        if(secondPageErrors[accessor]){
            delete secondPageErrors[accessor];
        }
    };

    const goBack = () => {
        setPage((currentPage) => currentPage - 1)
        setIsClicked(false)
        setIsActive(true)
    };

    const goNext = () => {
        if (page === 0) {
            setFirstPageErrors(validateFirstPage(formValues, missingCoutry, missingJob, missingTime))
            
            if (checkIfEveryElementIsTrue(getKeyFormValues(formValues,0,2,3,5)) === true
                || checkIfEveryElementIsTrue(getKeyFormValues(formValues,0,1,2,5)) === true) {

                setIsClicked(true)
            }
        }
        if (page === 1 && typeof formValues.phone === 'string') {
            setSecondPageErrors(validateSecondPage(
                formValues,
                missingName,
                missingLastName,
                missingEmail,
                invalidFormatName,
                invalidFormatLastName,
                invalidFormatEmail,
                invalidFormatPhoneTooShort,
                invalidFormatPhoneTooLong
                ))
            
            if (checkIfEveryElementIsTrue(getKeyFormValues(formValues,5,8)) === true
                && (formValues.phone.length > 13 || formValues.phone.length < 15)
                && noErrorsPageTwo === true) {

                setIsClicked(true)
            }
        }
    };

    const onCheckBox = (e) => {
        if(e.target.checked){

            setIsChecked(true);

            if(thirdPageErrors.confirmation){
                delete thirdPageErrors.confirmation;
            }
        } else {setIsChecked(false);}
    };

    const submit = (event) => {
        event.preventDefault();

        setThirdPageErrors(validateThirdPage(
            isChecked,
            missingConfirmation
            ))

        if (isChecked === false) {

            setIsFormConfirmed(false)

        }
        if (isChecked === true){

            setIsFormConfirmed(true)

            const createPostData = {id: USER_ID, ...formValues}
            if(createPostData) {
                getValueOfValueKey(createPostData, 'job');
                if(createPostData.localitySpecificationUsa.length === 0){
                    getValueOfValueKey(createPostData, 'localitySpecificationEu');
                    createPostData['localitySpecificationUsa'] = null
                }
                if(createPostData.localitySpecificationEu.length === 0){
                    getValueOfValueKey(createPostData, 'localitySpecificationUsa');
                    createPostData['localitySpecificationEu'] = null
                }
            }
            postData(createPostData);
        }
    };

    const PageDisplay = () => {
        if (page === 0) {
            return <SubformPreferency
                        optionsEuCountries={optionsEuCountries}
                        optionsUsaStates={optionsUsaStates}
                        optionsJobs={optionsJobs}
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
                        onClickValTime={(e) => handleChangeTimeOptions(e, 'time')}
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
                        onCheckBox={onCheckBox}
                        isChecked={isChecked}
                        confirmationError={thirdPageErrors.confirmation}
                />
        }
    };

    const subForm = PageDisplay();
    
    return (
        <>
            {isApiGetError === true ?
            <GetApiError />
            : 
            <StyledFormWrapper key={FORM_PAGES[page]}>
                <StyledProgressBar>
                    {FORM_PAGES.map((formPage) => (
                        page === formPage
                        ? <StyledActiveBar key={Math.floor(Math.random()*1000)} />
                        : <StyledDisActiveBar key={Math.floor(Math.random()*100000)}/>
                    ))}
                </StyledProgressBar>
                <form onSubmit={submit}>
                    {subForm}
                    <StyledButtonContainer>
                        <StyledButtonWrapper>
                            {page > 0 &&
                                <StyledBackButton
                                    type='button'
                                    disabled={page === 0}
                                    onClick={() => {
                                        goBack()
                                    }}
                                >
                                    {t('buttons.back')}
                                </StyledBackButton>
                            }
                        </StyledButtonWrapper>
                        <StyledButtonWrapper
                        endJustified
                        >
                            {page < FORM_PAGES.length -1 &&
                                <StyledNextButton
                                    type='button'
                                    nextBtnActive={isActive === true && 'nextBtnActive'}
                                        onClick={() => {
                                            goNext()
                                        }}
                                >
                                    {t('buttons.next')}
                                </StyledNextButton>
                            }
                            {page > FORM_PAGES.length -2 &&
                                <StyledConfirmButton
                                    confirmBtnActive={isChecked === true && 'confirmBtnActive'}
                                    type='submit'
                                    submitBtn
                                >
                                    {t('buttons.confirmForm')}
                                </StyledConfirmButton>
                            }
                        </StyledButtonWrapper>
                    </StyledButtonContainer>
                </form>
            </StyledFormWrapper>
            }
        </>
    );
};

Form.propTypes = {
    setHeaderHeight: PropTypes.func,
};

export default Form;