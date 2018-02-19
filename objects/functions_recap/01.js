console.log(function duplicate(a){
    var k=0, c=[];
    for (i=0; i<a.length; i++){
        c.push(a[i]);
        c.push(a[i]);
        
        }
        return c;
}([1,2,3,4]));