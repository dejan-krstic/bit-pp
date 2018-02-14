// suma elemenata niza
function add(a,b){
    a+=b;
    return a;
}

function arraySum(a,b,f){
    var c=[];
    for (var i=0; i<a.length; i++) c[i]=f(a[i],b[i]);
    return c;
}

console.log(arraySum([1,2,3,4,5],[-1,-2,-3,-4,-5],add));

function arrayConcat(a,b){

    for (var i=b.length; i<2*b.length; i++) a[i]=b[i-b.length];
    return a;
}

console.log(arrayConcat([1,2,3,4,5],[-1,-2,-3,-4,-5]));
