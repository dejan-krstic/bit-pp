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
// console.log(2*"876");