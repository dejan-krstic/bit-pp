// radjeno vec tokom nastave, samo prekopirao da bude na istom mestu sve

function concatArr(a, b){
    for (i = a.length, j = 0; j<b.length; i++, j++) {
        a[i] = b [j];
    }
    return a;
}

console.log(concatArr([3,4,-2],[8,7,8]));