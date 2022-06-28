import {useState, useEffect} from 'react';
import {fetchData, postData} from '../../../../api/apiCall';
import {useTranslation} from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import {
    defaultValuesForm,
    defaultValuesTimeButton,
    FormPages,
} from '../../../../utils/common/constants'
import {getKeyFormValues,
        checkIfEveryElementIsTrue
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
import ApiError from '../../../commonComponents/sideComponents/ApiError';
import FinalPage from '../../../commonComponents/sideComponents/FinalPage';

const Form = () => {

    const { t } = useTranslation();
    
    const [optionsEuCountries, setOptionsEuCountries] = useState('');
    const [optionsUsaStates, setOptionsUsaStates] = useState('');
    const [optionsJobs, setOptionsJobs] = useState('');
    const [formValues, setFormValues] = useState(defaultValuesForm);
    const [designToggleBtnOne, setdesignToggleBtnOne] = useState(true);
    const [designToggleBtnTwo, setdesignToggleBtnTwo] = useState(false);
    const [btnStates, setBtnStates] = useState(defaultValuesTimeButton);
    const [firstPageErrors, setFirstPageErrors] = useState({});
    const [secondPageErrors, setSecondPageErrors] = useState({});
    const [thirdPageErrors, setThirdPageErrors] = useState({});
    console.log('thirdPageErrors');
    console.log(thirdPageErrors);
    const [page, setPage] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isCheckBoxConfirmed, setIsCheckBoxConfirmed] = useState(false);
    console.log('isCheckBoxConfirmed');
    console.log(isCheckBoxConfirmed);
    const [isFormConfirmed, setIsFormConfirmed] = useState(false);
    console.log('isFormConfirmed');
    console.log(isFormConfirmed);
    const [isError, setIsError] = useState(false);

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
                setIsError(false);
            } else {

                setIsError(true)
            }
        }

    useEffect(() => {
            getData()
    },[]);

    useEffect(() => {
        window.scroll(0, 100)
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
    }, [isClicked, noErrorsPageOne, noErrorsPageTwo, page])

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
                && formValues.phone.length < 15)
                ) {
    
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
            {...prevState, 'phone': defaultValuesForm.phone}
        ))
    }
    }, [formValues.phone, setFormValues])

    const handleToggleButtonEvent = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
            ))
            if(formValues.locality === 'USA') {
                setFormValues(prevState => (
                    {...prevState, 'localitySpecificationUsa': ''}
                ));
            };
            if(formValues.locality === 'EU') {
                setFormValues(prevState => (
                    {...prevState, 'localitySpecificationEu': ''}
                ));
            };
            setIsActive(false)
    }

    const handleToggleRelatedEvent = (value, accessorOne, accessorTwo) => {
        setFormValues(prevState => (
            {...prevState, [accessorOne]: value}
        ));
        setFormValues(prevState => (
            {...prevState, [accessorTwo]: ''}
        ));

         setIsClicked(false)

        if(firstPageErrors[accessorOne]){
            delete firstPageErrors[accessorOne];
        }
        if(firstPageErrors[accessorTwo]){
            delete firstPageErrors[accessorTwo];
        }
    }

    const handleChangeTimeOptions = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
        ));

        const timeId = e.target.id;
        const truthyFalsyLogic = btnStates.map(obj => ({...obj, btnBoolean: timeId.includes(obj.id)}));
        setBtnStates(truthyFalsyLogic);

        if(firstPageErrors[accessor]){
            delete firstPageErrors[accessor];
        }
    }

    const handleEventValue = (value, accessor) => {
        setFormValues(prevState => (
           {...prevState, [accessor]: value}
        ));

        setIsClicked(false)

        if(firstPageErrors[accessor]){
            delete firstPageErrors[accessor];
        };
        if(secondPageErrors[accessor]){
            delete secondPageErrors[accessor];
        };
      }

    const handleEventTargetValue = (e, accessor) => {
        setFormValues(prevState => (
            {...prevState, [accessor]: e.target.value}
            ))

        if(secondPageErrors[accessor]){
            delete secondPageErrors[accessor];
        }
    }

    const goBack = () => {
        setPage((currentPage) => currentPage - 1)
        setIsClicked(false)
        setIsActive(true)
    }

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
    }

    const onCheckBox = (e) => {
        if(e.target.checked){
            setIsCheckBoxConfirmed(true);
            if(thirdPageErrors.confirmation ){
                delete thirdPageErrors.confirmation;
            }
        } else {setIsCheckBoxConfirmed(false);}
        
    }

    //move into function!!!!!!!!!!!!!!!!!!
    const getValueOfValueKey = (object, key) => {
        const goal = object[key];
        if(goal) {
            const getItem = Object.values(goal).map(j => j)[0];
            object[key] = getItem;
        }
    }

    const submit = (e) => {
        e.preventDefault();

        setThirdPageErrors(validateThirdPage(
            isCheckBoxConfirmed,
            missingConfirmation
            ))

        if (isCheckBoxConfirmed === false) {
            setIsFormConfirmed(false)
        }
        if (isCheckBoxConfirmed === true){
            setIsFormConfirmed(true)

            const createPostData = {id: uuidv4(), ...formValues};
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
                console.log(createPostData);
            }
            postData(createPostData);
        }
    }

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
                        confirmationError={thirdPageErrors.confirmation}
                />
        }
    }
    const subForm = PageDisplay()
    
    return (
        <>
        {isError === true ?
            <ApiError />
            : 
            <>
            {isFormConfirmed === true ?
                <FinalPage />
                :
                <StyledFormWrapper key={FormPages[page]}>
                    <StyledProgressBar>
                        {FormPages.map((formPage) => (
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
                                {page < FormPages.length -1 &&
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
                                {page > FormPages.length -2 &&
                                    <StyledConfirmButton
                                        confirmBtnActive={isCheckBoxConfirmed === true && 'confirmBtnActive'}
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
        }
    </>
    );
}

export default Form;