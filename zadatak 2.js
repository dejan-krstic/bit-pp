var n = 70;
var x = n % 10;
var y = (n - x) / 10;

if ((n > 9 && n < 100) || (n < -9 && n > -100)) {
    
} else if (n % 10 == 0) {
    console.log("0" + y);
    console.log(x * 10 + y);
} else {
    console.log("Greska")
}