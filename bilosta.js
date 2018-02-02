/* var a=15,
    b=-3,
    c=8,
    buffer;

if (a>b) { buffer = a; a = b; b = buffer; }
if (a>c) { buffer = a; a = c; c = buffer; }
if (b>c) { buffer = b; b = c; c = buffer; }

console.log (a);
console.log (b);
console.log (c);

if (a>b && a>c){

    if(b>c){
        console.log(c b a);

    }

}

if (b>c) && (b>a){

    
}
if (c>a) && (c>b){

    
} */

var n=50, x, y, z;

if (typeof n == 'number' && n > 9 && n < 100){
    x = n % 10; // =6
    y = (n - x) / 10; // = 5
    z = x * 10 + y;
    if (x==0) z = '0'+ y;

console.log (z);

}
else console.log ('Error');

