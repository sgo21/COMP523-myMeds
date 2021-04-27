/*  

HELPER FUNCTIONS FOR FORMATTING TEXT AND NUMBERS
capitalize() and titleCase() standardize the letter casing of string inputs 
roundTenths() rounds numbers to nearest tenths place.

*/

export function capitalize(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.substring(1, inputString.length).toLowerCase();
}

export function titleCase(inputString) {
    return inputString.replace(/[^\ \/\-\_]+/g, capitalize);
}

export function roundTenths(num, place) {
    if( !place) place = 0;
    let pow = Math.pow(10,place);
    return Math.round(num*pow)/pow;
}
