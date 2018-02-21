console.log(function odd(a){
    if (a.length%2) return true;
        else return false;
}([1,2,1,3,1,6,1,6,1,6,6,5,5]));

console.log(function odd(a){
    if (a.length%2-1) return ("Array doesn't have middle element");
    var j=(a.length-1)/2;
    var k=0;
    for (i=0; i<a.length; i++) if (a[i]<a[j]) k++;
    return k;
}([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// console.log(function odd(a){
//     if (a.length%2-1) return ("Array doesn't have middle element");
//     var c=a[(a.length-1)/2];
//         a.sort();

//         return a;
// }([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
// doesn't work because it sorts out by Unicode
var points = [40, 100, 1, 5, 25, 10];
  

function myFunction() {
    points.sort(function(a, b){return a - b});
};
myFunction();
console.log(points);