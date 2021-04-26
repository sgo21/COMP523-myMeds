/*  

LETTER CASING HELPER FUNCTIONS
Following helper functions help standardize the letter casing of string inputs 

*/

export function capitalize(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.substring(1, inputString.length).toLowerCase();
}

export function titleCase(inputString) {
    return inputString.replace(/[^\ \/\-\_]+/g, capitalize);
}