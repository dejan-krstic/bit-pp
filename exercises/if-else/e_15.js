// Write a program to input sides of a triangle and checks if triangle is valid or not
var a = 7;
var b = 4;
var c = 4;
var triangle = " not";

if (a + b > c && b + c > a && c + a > b) {
    triangle = "";
}
console.log("Triangle is" + triangle, "valid.");