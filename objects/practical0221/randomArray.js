function randomArray (b){
    var c=[];
    var a=[];
    for (i=0; i<b.length; i++) {
        a[i]=b[i];
    }
    for (i=0; i<b.length; i++) {
        var index = parseInt(Math.random()*(a.length));
        console.log('index = ' + index, 'a.length = ' + a.length, 'a = ' + a,'c = ' + c);
        c[i]=a[index];
        a.splice(index, 1);
    }
    return c;
}

console.log(randomArray([1,2,3,4,5,6,7,8,9]));
var h = new Number(4.5767675656);
console.log((4).toFixed(3));