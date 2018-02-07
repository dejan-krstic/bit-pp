var a = 5;
var b = 7;
var c = 1;
var temp;
if(a>b) {
    temp = b;
    b = a;
    a = temp
}
if(b>c) {
    temp = b;
    b = c;
    c = temp
}
if(a>b) {
    temp = b;
    b = a;
    a = temp
}
console.log(a,b,c);

