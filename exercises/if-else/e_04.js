// Write a program to check whether the number is divisible by 5 and 11 or not
var a = 55;
var result = " not "

if (!(a % 5 && a % 11)) {
    result = " "
}

console.log("The number is" + result + "divisible by 5 and 11");