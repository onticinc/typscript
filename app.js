// add :number to the function declaration to make it explicit that the function returns a number. 
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 === 'number' || typeof n2 === 'number'){
    //     throw new Error('Incorrect input!');
    const result = n1 + n2
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 1;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is:';

add(number1, number2, printResult, resultPhrase);
