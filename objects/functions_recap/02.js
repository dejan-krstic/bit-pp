console.log(function reduce(a){
    for (i=0; i<a.length; i++){
        for (j=i+1; j<a.length; j++){
            if (a[i]==a[j]) a.splice(j,1);
        }
    }
    return a;
}([1,2,1,3,1,6,6,5,2]));

console.log(function reduce(a){
    a.sort();
    for( i=0; i<a.length; i++)
        while (a[i]==a[i+1]) a.splice(i,1);  
    return a;
}([1,2,1,3,1,6,1,6,1,6,6,5,2]));





