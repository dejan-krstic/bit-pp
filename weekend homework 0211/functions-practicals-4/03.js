function minInd (a){
    var min=a[0];
    var j=0;
    for (i=1; i<a.length; i++)
        if (a[i]<min) {
            min=a[i];
            j=i;   
        }
    return [min,j];
}
console.log(minInd([1,3,2,5,-1,2,-3,6]));