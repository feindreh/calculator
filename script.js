function add(num1,num2){
    return num1+num2
}

function sub(num1,num2){
    return num1-num2
}

function multi(num1,num2){
    return num1*num2
}

function divid(num1,num2){
    return num1/num2
}

function operate(operator,num1,num2){
    switch(operator){
        case "plus":
            return add(num1,num2);
            break;
        case "minus":
            return sub(num1,num2);
            break;
        case "multiply":
            return multi(num1,num2);
            break;
        case "divide":
            return divide(num1,num2);
            break;
    }
}