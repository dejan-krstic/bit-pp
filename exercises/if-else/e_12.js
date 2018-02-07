// Write a program to input month number and print number of days in that month
var n = 2;
var days;

if (n >= 1 && n <= 12 && !(n % 1)) {
    if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
        days = 31;
    } else if (n == 4 || n == 6 || n == 9 || n == 11) {
        days = 30;
    } else if (n == 2) {
        days = 28;
    }
    console.log(days);
}
else console.log("Invalid input!");