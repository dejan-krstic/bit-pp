// Najjeftiniji od 3 proizvoda za 1 din, ispisati ukupnu cenu

var a = 20;
var b = 4;
var c = 4;

if (a <= b && a <= c) {
    a = 1;
}
else if (b <= a && b <= c) {
    b = 1;
}
else if (c <= a && c <= b) {
    c = 1;
}
console.log(a + b + c);
