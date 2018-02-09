function combArr(a,b){
    c = [];
    i=0;
    if (a.length != b.length) return -1;
    for (k=0; k<a.length*2;){
        c[k++] = a[i];
        c[k++] = b[i++];
    
    }
    return c;
}


function concatArr(a, b){
    for (i = a.length, j = 0; j<b.length; i++, j++) {
        a[i] = b [j];
    }
    return a;
}

console.log(combArr([3,4,-2],[8,7,8]));

