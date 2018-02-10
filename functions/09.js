<<<<<<< HEAD
function stringSep(a, b) {
    var new_s = "";
    if (!b) b = "-";
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") new_s += b;
        else new_s += a[i];
    }
    return new_s;
}
=======
function stringSep(a, b) {
    var new_s = "";
    if (!b) b = "-";
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") new_s += b;
        else new_s += a[i];
    }
    return new_s;
}
>>>>>>> 6f4589c15aed2a9820a10c6c95d5eb3099fa2d7a
console.log(stringSep("Ana Brnabic", "+"));