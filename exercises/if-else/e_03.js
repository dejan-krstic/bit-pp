// Write a program to check whether the number is positive, negative or a zero
var a = 0;
var sign = "positive"

if (a == 0) {
    sign = "zero";
}
else if (a < 0) {
    sign = "negative"
}

console.log("The number is", sign + ".");