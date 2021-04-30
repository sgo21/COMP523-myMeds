/*  

HELPER FUNCTIONS FOR FORMATTING TEXT AND NUMBERS
capitalize() and titleCase() standardize the letter casing of string inputs 
roundTenths() rounds numbers to nearest tenths place.

*/

export function capitalize(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.substring(1, inputString.length).toLowerCase();
}


export function titleCase(inputString) {
    let stringArray = inputString.split(" ");
    let titleCaseArray = [];
    for(let i = 0; i < stringArray.length; i++){
        let string = stringArray[i];
        string = string.toLowerCase();
        if (string !== "and") {
            string = string.charAt(0).toUpperCase() + string.substring(1, string.length).toLowerCase();
        }
        titleCaseArray.push(string)
    }
    return titleCaseArray.join(' ');
}


export function roundTenths(num, place) {
    if( !place) place = 0;
    let pow = Math.pow(10,place);
    return Math.round(num*pow)/pow;
}
