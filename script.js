function operate(operator, num1, num2){

}

function add(num1, num2){

}

function subtract(num1, num2){
    
}

function multiply(num1, num2){
    
}

function divide(num1, num2){
    
}

function display(display, expression){

}

function displayResult(display, result){

}

function opCheck(expression){ //returns true if last char is operator
    if(expression.length<=1)
        return false;
    if(lastChar=='+' || lastChar=='-' || lastChar=='/' || lastChar=='*')
        return true;
    return false;
}

let num1, num2, operator, clickCount=0; //handles numerical input;
let expression=[];
//expression.length=3;
let result;

let buttons=document.querySelector(".numButtons");
let display=document.querySelector(".display");
buttons.addEventListener("click", (event) => {
    let target=event.target;
   
    if (target.classList.contains('btn0')){
        if(opCheck(expression)){
            num2+='0';
            expression[2]=num2;
        }
        else{
            num1+='0';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn1')){
        if(opCheck(expression)){
            num2+='1';
            expression[2]=num2;
        }
        else{
            num1+='1';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn2')){
        if(opCheck(expression)){
            num2+='2';
            expression[2]=num2;
        }
        else{
            num1+='2';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn3')){
        if(opCheck(expression)){
            num2+='3';
            expression[2]=num2;
        }
        else{
            num1+='3';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn4')){
        if(opCheck(expression)){
            num2+='4';
            expression[2]=num2;
        }
        else{
            num1+='4';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn5')){
        if(opCheck(expression)){
            num2+='5';
            expression[2]=num2;
        }
        else{
            num1+='5';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn6')){
        if(opCheck(expression)){
            num2+='6';
            expression[2]=num2;
        }
        else{
            num1+='6';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn7')){
        if(opCheck(expression)){
            num2+='7';
            expression[2]=num2;
        }
        else{
            num1+='7';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn8')){
        if(opCheck(expression)){
            num2+='8';
            expression[2]=num2;
        }
        else{
            num1+='8';
            expression[0]=num1;
        }
        display(display, expression);
    }
    else if (target.classList.contains('btn9')){
        if(opCheck(expression)){
            num2+='9';
            expression[2]=num2;
        }
        else{
            num1+='9';
            expression[0]=num1;
        }
        display(display, expression);
    }
});

let opbuttons=document.querySelector(".opButtons");
buttons.addEventListener("click", (event) => {
    let target=event.target;
    if(target.classList.contains('btnP')){
        if(!opCheck(expression) && expression.length==1){
            expression.push('+');
            expression.length++;
            display(display, expression);
        }
    }
    else if(target.classList.contains('btnS')){
        if(!opCheck(expression) && expression.length==1){
            expression.push('-');
            expression.length++;
            display(display, expression);
        }
    }
    else if(target.classList.contains('btnM')){
        if(!opCheck(expression) && expression.length==1){
            expression.push('*');
            expression.length++;
            display(display, expression);
        }
    }
    else if(target.classList.contains('btnD')){
        if(!opCheck(expression) && expression.length==1){
            expression.push('/');
            expression.length++;
            display(display, expression);
        }
    }
    else if(target.classList.contains('btnE')){
        if(expression.length==3){
            num1=parseInt(expression[0]);
            operator=expression[1];
            num2=parseInt(expression[2]);
            result=operate(operator, num1, num2);
            result=String(result);
            displayResult(display, result);
            num1=result;
            expression.length=0;
            expression.push(num1);
        }
    }
    else if(target.classList.contains('btnClear')){
        expression.length=0;
        result='';
        num1='';
        num2='';
        display(display, expression);
    }
});