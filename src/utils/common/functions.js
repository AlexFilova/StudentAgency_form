export const getKeyFormValues = (stateValues, valStartOne, valEndOne, valStartTwo, valEndTwo) => {
    const objToArrayOne = Object.values(stateValues).slice(valStartOne, valEndOne).map(v => v.length !== 0);
    const objToArrayTwo = Object.values(stateValues).slice(valStartTwo, valEndTwo).map(v => v.length !== 0);
    const newFormValueArray = !valStartTwo && !valEndTwo ? objToArrayOne : [...objToArrayOne, ...objToArrayTwo]

    return newFormValueArray;
}

export const checkIfEveryElementIsTrue = (elements) => {
    const trueOrFalseResult = elements.every(element => element === true);
    
    return trueOrFalseResult;
}

export const getValueOfValueKey = (object, key) => {
    const goal = object[key];
    if(goal) {
        const getItem = Object.values(goal).map(j => j)[0];
        object[key] = getItem;
    }
}