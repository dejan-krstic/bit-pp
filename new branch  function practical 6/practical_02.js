function combArray(a,b){
    var c = [];
    var k= 0;
    for (i=0, j=0; i<a.length, j<b.length; i++, j++){
        c[k++]=a[i];
        c[k++]=b[j];
    }
    for (i=b.length; i<a.length; i++) c[k++]=a[i];
    for (i=a.length; i<b.length; i++) c[k++]=b[i];
    return c;
}
console.log(combArray([1,2,3,4,5,6,7,8,9,10,11,12,13],['a','b','c','d','e','f','g']));