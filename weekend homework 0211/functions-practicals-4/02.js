function posMul (a){
    for (i=0; i<a.length; i++)
        if (a[i]>0) a[i]*=2;
    return a;
}
console.log(posMul([-1,1,-2,2,-3,3,-4,4]));