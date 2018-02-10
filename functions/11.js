<<<<<<< HEAD
function filterNonNum(a) {
    var new_arr = [];
    var j = 0;
    for (i = 0; i < a.length; i++) {
        var check = a[i] * 1;
        console.log(check);
        if (isNaN(check) || !isFinite(check)) continue; 
        if (typeof check == "number") {
            new_arr[j] = check;
            j++
        }
    }
    return new_arr;
}
console.log(filterNonNum([]));
=======
function filterNonNum(a) {
    var new_arr = [];
    var j = 0;
    for (i = 0; i < a.length; i++) {
        var check = a[i] * 1;
        console.log(check);
        if (isNaN(check) || !isFinite(check)) continue; 
        if (typeof check == "number") {
            new_arr[j] = check;
            j++
        }
    }
    return new_arr;
}
console.log(filterNonNum([]));
>>>>>>> 6f4589c15aed2a9820a10c6c95d5eb3099fa2d7a
// console.log(2*"876");