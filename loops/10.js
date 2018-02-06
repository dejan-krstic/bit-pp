var n = 16;
var s = "*";
var l = [];
var e = "";
var c;

console.log(l);

if (n % 2 == 0) {
    for (i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            e = "";
            for (j = 0; j < n; j++) {
                e += '*'
            }
            console.log(e);
        }
        else {
            e = "";
            for (j = 1; j < n - 1; j++) {
                e += " ";
            }
            e = "*" + e + "*";
            console.log(e);
        }
    }
}
else {
    m = "";

    for (i = 0; i < n / 2; i++) {
        l[i] = "";
        a = false;
        for (j = i + 1; j < n - 1 - i; j++) {
            l[i] += " ";
            a = true;
        }
        if (a) {
            l[i] = m + "*" + l[i] + "*" + m;
            m += " ";
        }
        else l[i] = m + "*" + m;
        console.log(l[i]);
    }
    for ( c = (n-1)/2 -1 ; c >= 0; c--)
        console.log(l[c]);

}







