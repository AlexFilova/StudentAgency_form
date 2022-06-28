export const validateFirstPage = (values, missingCoutry, missingJob, missingTime) => {
    const errors={};
    if(!values.localitySpecificationEu && values.locality === 'EU') {
        errors.localitySpecificationEu = missingCoutry;
    }
    if(!values.localitySpecificationUsa && values.locality === 'USA') {
        errors.localitySpecificationUsa = missingCoutry;
    }
    if(!values.job) {
        errors.job = missingJob;
    }
    if(!values.time) {
        errors.time = missingTime;
    }
    return errors;
}

export const validateSecondPage = (values, missingName, missingLastName, missingEmail, invalidFormatName, invalidFormatLastName, invalidFormatEmail, invalidFormatPhoneTooShort, invalidFormatPhoneTooLong) => {
    const errors={};
    const nameRegex=/^[a-zA-Z]+$/i;
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name) {
        errors.name = missingName;
    } else if(!nameRegex.test(values.name)) {
        errors.name = invalidFormatName;
    }
    if(!values.lastname) {
        errors.lastname = missingLastName
    } else if(!nameRegex.test(values.lastname)) {
        errors.lastname = invalidFormatLastName;
    }
    if(!values.email) {
        errors.email = missingEmail;
    } else if(!emailRegex.test(values.email)) {
        errors.email = invalidFormatEmail;
    }
    if(values.phone.length < 13) {
        errors.phone = invalidFormatPhoneTooShort;
    } else if(values.phone.length > 14) {
        errors.phone = invalidFormatPhoneTooLong;
    }
    return errors;
}
export const validateThirdPage = (values, missingConfirmation) => {
    const errors={};
    if(values === false) {
        errors.confirmation = missingConfirmation;
    }
    console.log('errors');
    console.log(errors);
    return errors;
}