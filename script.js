function add(num1,num2){
    return num1+num2
}

function sub(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    return num1/num2
}

function operate(operator,num1,num2){
    switch(operator){
        case "plus":
            console.log(add(num1,num2));
            return add(num1,num2);
            break;
        case "minus":
            console.log(sub(num1,num2));
            return sub(num1,num2);
            break;
        case "multiply":
            console.log(multi(num1,num2));
            return multi(num1,num2);
            break;
        case "divide":
            console.log(divide(num1,num2));
            return divide(num1,num2);
            break;
    }
}

function addToDisplay(num){
    if(cleared === 1){cleared = 0; displayed = "";}
    displayed = displayed + `${num}`
    display.textContent = displayed
    if(typeof num === "number"){addToNumber(num)};
    if((num == "+")||(num =="-")||(num == "/")||(num == "*")){addToOperator(num)}
}

function addToNumber(num){

    if(whatNumber == "first"){number1 = number1 + `${num}`}
    if(whatNumber == "second"){number2 = number2 + `${num}`}
    console.log(number1)
    console.log(operatorSymbol)
    console.log(number2)

}

function addToOperator(num){
    operatorSymbol = num
    whatNumber = "second"
    console.log(number1)
    console.log(operatorSymbol)
    console.log(number2)

}

function deleteDisplay(){
    displayed = "calculator"
    cleared = 1
    display.textContent = displayed
}




const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector("#zero")

const addButton = document.querySelector("#plus")
const subButton = document.querySelector("#minus")
const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")




const display = document.querySelector("#display")
const clear = document.querySelector("#clear")
const operater = document.querySelector("#execute")

one.addEventListener('click', () => addToDisplay(1))
two.addEventListener('click', () => addToDisplay(2))
three.addEventListener('click', () => addToDisplay(3))
four.addEventListener('click', () => addToDisplay(4))
five.addEventListener('click', () => addToDisplay(5))
six.addEventListener('click', () => addToDisplay(6))
seven.addEventListener('click', () => addToDisplay(7))
eight.addEventListener('click', () => addToDisplay(8))
nine.addEventListener('click', () => addToDisplay(9))
zero.addEventListener('click', () => addToDisplay(0))

addButton.addEventListener('click', () => addToDisplay("\+"))
subButton.addEventListener('click', () => addToDisplay("-"))
multiplyButton.addEventListener('click', () => addToDisplay("*"))
divideButton .addEventListener('click', () => addToDisplay("/"))

clear.addEventListener('click', () => deleteDisplay())
operater.addEventListener('click', () => operate())

let cleared = 1


let number1 = ""
let number2 = ""
let operatorSymbol = ""
let whatNumber = "first"
