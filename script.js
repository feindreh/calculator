function add(num1,num2){
    return num1+num2
}

function sub(num1,num2){
    return num1-num2
}

function multi(num1,num2){
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

const one = document.querySelector("#1")
const two = document.querySelector("#2")
const three = document.querySelector("#3")
const four = document.querySelector("#4")
const five = document.querySelector("#5")
const six = document.querySelector("#6")
const seven = document.querySelector("#7")
const eight = document.querySelector("#8")
const nine = document.querySelector("#9")
const zero = document.querySelector("#0")

const display = document.querySelector("#display")
const clear = document.querySelector("#clear")





