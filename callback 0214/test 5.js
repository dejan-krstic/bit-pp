function f(a) {
    var k = 0;

    return function () {
        var b = "";
        for (i = 0; i < a.length; i++) {
            if (a[i] == 'a') { b += '*'; k++; }
            else b += a[i];

        };

        console.log(b);
        return k;

    };
  

};


console.log(f('javascript')());