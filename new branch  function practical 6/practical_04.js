var mirrorArray = function(a){
    var b =[];
    for (i=0; i< a.length; i++) {       
        b[i] = a[a.length-1-i];
    }
    return b;
}
var arrayOfDigi = function(a){
    l=[];
    k=0;

    while (a>0){
        l[k++] = a%10;
        a=parseInt(a/10);
    }

    return mirrorArray(l);
}

console.log(arrayOfDigi(123456));