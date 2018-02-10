<<<<<<< HEAD
function stringToArray(a) {
    var arr = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") arr[i] = null;
        else arr[i] = a[i];
    }
    return arr;
}

=======
function stringToArray(a) {
    var arr = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") arr[i] = null;
        else arr[i] = a[i];
    }
    return arr;
}

>>>>>>> 6f4589c15aed2a9820a10c6c95d5eb3099fa2d7a
console.log(stringToArray("Ana Brnabic"));