var a = 5;
var b = 100;
var c = 20;
var total;

if (a > b) {
    if (b > c) {
        total = a + b + 1;
    }
    else {
        total = a + c + 1;
    }

} else if (a > c) {
    total = a + b + 1;
}
else {
    total = 1 + b + c;
}

console.log("Total price of three items is " + total);