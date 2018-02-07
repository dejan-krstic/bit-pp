// Write a program to input sides of a triangle and checks if triangle is equilateral, isosceles or scalene
var a = 7;
var b = 49;
var c = 6;
var triangle = "scalene";

if (a + b > c && b + c > a && c + a > b) {
    if (a == b && b == c && c == a) {
        triangle = "equilateral";
    }
    else if (a == b || b == c || c == a) {
        triangle = "isosceles";
    }
}
else {
    triangle = "not valid";
}
console.log("Triangle is", triangle + ".");
// console.log(a == b == c);
// console.log(4 == true);
// console.log(true == 4);