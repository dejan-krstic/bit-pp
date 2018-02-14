'use strict'
function arrayCon(a, b) {
    var i = 0;
    var j = 0;
    var c = [];
    var k;
    for (k = 0; k < a.length + b.length; k++) {

        if (i < a.length && j < b.length) {
            if (a[i] < b[j]) c[k] = a[i++];
            else c[k] = b[j++];
        }
        else {if (i < a.length) c[k] = a[i++];
        else c[k] = b[j++];}

        
    }
    return c;
}

console.log(arrayCon([-1, 5, 11, 16, 18, 19], [1, 2, 3, 4]));



