console.log(function reduce(a){
    var c=a;
    c.sort(function(x,y){return x-y} );
    return {smallestValue: c[0], last_index : a.lastIndexOf(6), as : a};
}([1,2,-1,3,1,6,1,6,-1,6,6,5,2]));