// Example 1

var global = 1;

function myFunc() {
   var local = 2;
   global++;
   return global;
}

// Example 2

var done = false;
while (done = false) {
 
}

for (var i = 1; i <= 9; i++) {
    var sum = 0;
    sum = sum + i;
 }
 
 console.log(sum);


// Example 4

var x = -32.2;
var isPositive = (x > 0);

if (!isPositive) {
   console.log(x + " is positive");
} else {
   console.log(x + " is not positive");
}

// Example 5

var x = -20

if (x > 0);
console.log("positive");




var f = 0, g = 1;

for (var i = 0; i <= 30; i++) {
   console.log(f);
   f = f + g;
   g = f - g;
}

console.log(true+true);

// Example 7

var x = 5;
var y = 3;
var min = (x < y) ? x : y;

console.log(min)

// Example 8

function sum(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;
 
    return num1 + num2;
 }
 
 var result = sum(5,NaN);
 console.log(result)
 
 console.log(Infinity == Infinity);

 console.log((undefined) == (undefined));

 var f = function () {
    return 1;
 };
console.log(typeof f); 
console.log(f(2));