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



