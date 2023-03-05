// add :number to the function declaration to make it explicit that the function returns a number. 




function add(n1: number, n2: number, showResult: boolean, phrase: string){
    // if (typeof n1 === 'number' || typeof n2 === 'number'){
    //     throw new Error('Incorrect input!');
    if (showResult){
        console.log(phrase + n1 + n2)
    } else {
    return n1 + n2;
}}

const number1 = 1;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:'


add(number1, number2, printResult, resultPhrase);



