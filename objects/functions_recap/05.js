console.log(function reduce(a,b){
    var c=a[b];
    for (var i=a.length-1; i>=0; i--) if (a[i]>=c) a.splice(i,1);
    return a;  
}([1,2,-1,3,1,6,1,6,-1,6,6,5,2], 3));

console.log(function reduce(a){
    var c=a[b];
    for (var i=a.length-1; i>=0; i--) if (a[i].indexOf('pro')) a.splice(i,1);
    return a;  
}(["prototype", "parking", "problem"]));



