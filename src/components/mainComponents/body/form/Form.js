import {useState, useEffect} from 'react';
import {FormWrapper, ProgressBar, ActiveBar, DisActiveBar, StyledButtonWrapper, StyledButton, StyledNextButton, StyledButtonContainer} from './styles';
import SubFormCheck from '../subform/SubFormCheck';
import SubformPreferency from '../subform/SubformPreferency';
import SubFormPersonalInfo from '../subform/SubFormPersonalInfo';
import { useTranslation } from 'react-i18next';

const defaultValuesForm = {
    locality: 'EU',
    localitySpecificationEu:'',
    localitySpecificationUsa:'',
    job: '',
    time: '',
    name: '',
    lastname: '',
    email: '',
    phone: '+421',
}

const defaultValuesTimeButton = [
    {
        id: 1,
        btnBoolean: false,
    },
    {
        id: 2,
        btnBoolean: false,
    },
    {
        id: 3,
        btnBoolean: false,
    },
    {
        id: 4,
        btnBoolean: false,
    },
    {
        id: 5,
        btnBoolean: false,
    },
    {
        id: 6,
        btnBoolean: false,
    },
]

const Form = () => {
    console.log('Render Form');

    const { t } = useTranslation();

    const [formValues, setFormValues] = useState(defaultValuesForm);
    // console.log('formValues');
    // console.log(formValues);
    console.log('formValues.phone');
    console.log(formValues.phone);
    const [designToggleBtnOne, setdesignToggleBtnOne] = useState(true);
    const [designToggleBtnTwo, setdesignToggleBtnTwo] = useState(false);

    const [btnStates, setBtnStates] = useState(defaultValuesTimeButton); 
    const [firstPageErrors, setFirstPageErrors] = useState({});
    console.log(firstPageErrors);
    const [secondPageErrors, setSecondPageErrors] = useState({});
    console.log(secondPageErrors);
    const [page, setPage] = useState(0);
    const [isClicked, setIsClicked] = useState(false)
    const FormPages = [0, 1, 2];
    const noErrorsPageOne = Object.keys(firstPageErrors).length === 0;
    const noErrorsPageTwo = Object.keys(secondPageErrors).length === 0;

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

    
    const getKeyFormValues = (valStartOne, valEndOne, valStartTwo, valEndTwo) => {
        const objToArrayOne = Object.values(formValues).slice(valStartOne, valEndOne).map(v => v.length !== 0);
        const objToArrayTwo = Object.values(formValues).slice(valStartTwo, valEndTwo).map(v => v.length !== 0);
        const newFormValueArray = !valStartTwo && !valEndTwo ? objToArrayOne : [...objToArrayOne, ...objToArrayTwo]

        return newFormValueArray;
    }

    const checkIfEveryElementIsTrue = (elements) => {
        const result = elements.every(element => element === true);
        
        return result;
    }

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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const goToNext = () => {
        if (page === 0) {
            setFirstPageErrors(validateFirstPage(formValues))
            
            if (checkIfEveryElementIsTrue(getKeyFormValues(0,2,3,5)) === true || checkIfEveryElementIsTrue(getKeyFormValues(0,1,2,5)) === true) {

                setIsClicked(true)
            }
        }
        if (page === 1) {
            setSecondPageErrors(validateSecondPage(formValues))
            
            if (checkIfEveryElementIsTrue(getKeyFormValues(5,8)) === true && formValues.phone.length > 6) {

                setIsClicked(true)
            }
        }
    }

    const validateFirstPage = (values) => {
        const errors={};
        if(!values.localitySpecificationEu && values.locality === 'EU') {
            errors.localitySpecificationEu = 'EU locality is required!'
        }
        if(!values.localitySpecificationUsa && values.locality === 'USA') {
            errors.localitySpecificationUsa = 'USA locality is required!'
        }
        if(!values.job) {
            errors.job = 'job is required!' 
        }
        if(!values.time) {
            errors.time = 'time is required!'
        }
        return errors;
    }
    const validateSecondPage = (values) => {
        const errors={};
        const nameRegex=/^[a-zA-Z]+$/i;
        const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!values.name) {
            errors.name = 'name is required!'
        } else if (!nameRegex.test(values.name)) {
            errors.name = 'invalid format of name!'
        }
        if(!values.lastname) {
            errors.lastname = 'lastname is required!'
        }
        if(!values.email) {
            errors.email = 'email is required!'
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'invalid format of email!'
        }
        if(values.phone.length < 6) {
            errors.phone = 'phone number is required!'
        } 
        return errors;
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