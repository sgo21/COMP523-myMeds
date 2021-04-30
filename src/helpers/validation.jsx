/*  

FORM VALIDATION HELPER FUNCTIONS 
Used during form validation, helper functions 
validateString, validateEmail, and validatePassword 
return true if input parameter matches the respective regular expression

To use for rendering feedback during form validation, 
validatePasswordFeedback uses the same logic as validatePassword but returns 
strings detailing the reason the input parameter did not match the regular expression. 

*/

export function validateString(inputString) {
    const stringRegex = /[^a-zA-Z\x20]/;
    if (inputString.length !== 0 && !stringRegex.test(inputString)) {
        return true;
    } else {
        return false; 
    }
};

export function validateNumeric(inputNumber) {
    const numberRegex = /[0-9]/;
    if (numberRegex.test(inputNumber)) {
        return true;
    } else {
        return false; 
    }
};

export function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false; 
    }
};

export function validatePassword(password) {
    const lengthRegex = /^[\s\S]{8,32}$/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (lengthRegex.test(password) &&
        upperCaseRegex.test(password) &&
        lowerCaseRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password)) {
        return true;
    } else {
        return false;
    }
};

export function validatePasswordFeedback(password) {
    const lengthRegex = /^[\s\S]{8,32}$/;
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (!lengthRegex.test(password)){
        return "Password must be 8 characters minimum"
    }
    if (!upperCaseRegex.test(password)){
        return "Password must contain at least one capital letter"
    }
    if (!lowerCaseRegex.test(password)){
        return "Password must contain at least one capital letter"
    }
    if (!numberRegex.test(password)){
        return "Password must contain at least one number"
    }
    if (!specialCharRegex.test(password)){
        return "Password must contain at least one special character (i.e. $, #, @, !, %, ^, &, *)"
    }
    return '';
};