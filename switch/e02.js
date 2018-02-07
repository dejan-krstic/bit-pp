// Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = -6;
var b = 0;
var op = "/";
var result;

switch ( op ) {
    case "+" :
        result = a + b;
        break;
    case "-" :
        result = a - b;
        break;
    case "*" :
        result = a * b;
        break;
    case "/" :
        if ( b == 0 ) {
            result = "Division by zero!";
        }
        else {
            result = a / b;
        }
        break;
}
console.log( result );