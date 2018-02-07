// Write a program to input week number and print week day
var n = -5;
var day;

// Checks n is integer
if (!(n % 1)) {
    if (n > 0 && n < 8) {
        if (n == 1) {
            day = "Monday";
        }
        else if (n == 2) {
            day = "Tuesday";
        }
        else if (n == 3) {
            day = "Wednesday";
        }
        else if (n == 4) {
            day = "Thursday";
        }
        else if (n == 5) {
            day = "Friday";
        }
        else if (n == 6) {
            day = "Saturday";
        }
        else day = "Sunday";
        console.log(day);
    }
    else console.log("Please input a number between 1 and 7!")
}
else console.log("ERROR")