function stringSep(a, b) {
    var new_s = "";
    if (!b) b = "-";
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") new_s += b;
        else new_s += a[i];
    }
    return new_s;
}
console.log(stringSep("Ana Brnabic", "+"));