'use strict'

let result, operator, firstNumber, secondNumber

firstNumber = parseInt(prompt('Enter your first number')) 
operator = prompt('Enter an operator,  [+  or  -  or  *  or  /]')
secondNumber = parseInt(prompt('Enter your second number')) 

if(isNaN(firstNumber) || isNaN(secondNumber)){
    alert(`Invalid Operation: ${firstNumber} ${operator} ${secondNumber}. Kindly restart`)
}
else{
    if(!(operator == '+') && !(operator == '-') && !(operator == '*') && !(operator == '/')){
        alert(`Invalid Operation: ${firstNumber} ${operator} ${secondNumber}. Kindly restart`)
    }
    else{
        if(operator == '+'){
            result = firstNumber + secondNumber
        }
        else if(operator == '-'){
            result = firstNumber - secondNumber
        }
        else if(operator == '*'){
            result = firstNumber * secondNumber
        }
        else if(operator == '/'){
            result = firstNumber / secondNumber
        }
        alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
    }
}