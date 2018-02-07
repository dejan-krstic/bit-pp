// Write a program to check whether the year is leap or not
var year = 2018;
var result = " not"

if (!(year % 100)) {
    if (!(year % 400)) {
        result = "";
    }
}
else if (!(year % 4)) {
    result = "";
}

console.log("The year", year, "is" + result + " leap.");