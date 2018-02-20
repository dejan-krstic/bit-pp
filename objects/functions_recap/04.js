console.log(function reduce(a){
    var c=[];
    for (i=0; i<a.length; i++) c[i]=a[i];
    c.sort(function(x,y){return x-y} );
    return {smallestValue: c[0], last_index : a.lastIndexOf(c[0])};
}([1,2,-1,3,1,6,1,6,-1,6,6,5,2]));
