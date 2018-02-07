var n = 15;

if (n % 2 == 0) {
    for (i = 0; i < n; i++) {
        l = "";
        for (j = 0; j < n; j++) {
            if (j == 0 || j == n - 1) l += "*";
            else if (i == 0 || i == n - 1) l += "*";
            else l += " ";
        }
        console.log(l);
    }
}
else {
    for (i = 0; i < n; i++) {
        l = "";
        for (j = 0; j < n; j++) {
            if (j == i || j == n - i - 1) l += "*";
            else l += " ";
        }
        console.log(l);
    }
}