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

function addToDisplay(num){
    if(cleared === 1){cleared = 0; displayed = "";}
    displayed = displayed + `${num}`
    display.textContent = displayed
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

const display = document.querySelector("#display")
const clear = document.querySelector("#clear")

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
clear.addEventListener('click', () => deleteDisplay())


// content of #display
let displayed = ""

//variable to store the information if the last 
//button was the #clear button 
// delete display sets it to 1
// any other key sets it to 0

let cleared = 1


