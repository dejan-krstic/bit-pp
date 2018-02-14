function sqr(n){
   var n;
   n*=n;
   return n;
}

function arraySqr (a, f){
    for (i=0; i<a.length; i++) a[i]=f(a[i]);
    return a;
}

console.log (arraySqr([1,2,3,4,5,6,7,8,9],sqr));