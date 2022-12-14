function add(num1,num2){
    return num1 + num2
}

function sub(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    if(num2 == 0){}
    return num1/num2
}

function operate(operator,num1,num2){
    number3 = ""

    num1 = Number(num1)
    num2 = Number(num2)

    switch(operator){
        case "+":
            number3 = add(num1,num2);
            break;
        case "-":
            number3 = sub(num1,num2);
            break;
        case "*":
            number3 = multiply(num1,num2);
            break;
        case "/":
            number3 = divide(num1,num2);
            break;
    }
    number3 = Math.floor(number3 * 100)/100
    display.textContent = `${number1} ${operatorSymbol} ${number2} = ${number3}`
    number1 = ""
    number2 = ""
    operatorSymbol = ""
    whatNumber = "first"
}

function addToDisplay(num){


    if(typeof num === "number"){addToNumber(num)};
    if((num == "+")||(num =="-")||(num == "/")||(num == "*")){addToOperator(num)}

}

function addToNumber(num){
    if(equals == 1){equals = 0; deleteDisplay()}
    if(whatNumber == "first"){number1 = number1 + `${num}`}
    if(whatNumber == "second"){number2 = number2 + `${num}`}
    updateDisplay()

}

function addToOperator(num){
    if(equals == 1){equals = 0; number1 = number3; updateDisplay()}
    if(number1 == ""){return}
    if(number2 != ""){operate(operatorSymbol,number1,number2);
                        number1 = number3;
                        number2 = "";}
    operatorSymbol = num
    whatNumber = "second"
    updateDisplay()

}

function deleteDisplay(){
    cleared = 1
    whatNumber = "first"
    equals = 0
    number1 = ""
    number2 = ""
    number3 = ""
    operatorSymbol = ""
    display.textContent = "calculator"
 
}

function updateDisplay(){
    display.textContent = `${number1} ${operatorSymbol} ${number2}`
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
operater.addEventListener('click', () => {  operate(operatorSymbol,number1,number2);
                                            equals = 1})

let cleared = 1
let whatNumber = "first"
let equals = 0


let number1 = ""
let number2 = ""
let number3 = ""
let operatorSymbol = ""



