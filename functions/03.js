function concat(a, b) {
    if (b == undefined) b =1;
    if (!b) return a;
    return (a + concat(a, b - 1));

    // if (arguments.length == 1) b=1; 
    // for (i=0; i<b; i++) sum += a;
    // return sum;
}

console.log(concat("Ha ", 3));