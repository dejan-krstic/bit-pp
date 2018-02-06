
var n = 14;

for (i = 0; i < n; i++) {
    l = "";
    for (j = 0; j < n; j++) {
        if (j == i || j == n - i -1) l += "*";
        else l += " ";
    }
    console.log(l);
}


