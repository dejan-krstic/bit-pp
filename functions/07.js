function stringToArray(a) {
    var arr = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") arr[i] = null;
        else arr[i] = a[i];
    }
    return arr;
}

console.log(stringToArray("Ana Brnabic"));