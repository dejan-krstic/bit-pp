function yearsToR(a,mof){
    ytr=65-2018+a;
    if (mof == "f") ytr -=5;
    return ytr;

}
console.log(yearsToR(1992,"f"));

