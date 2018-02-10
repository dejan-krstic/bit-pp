<<<<<<< HEAD
function concat(a, b) {
    if (b == undefined) b =1;
    if (!b) return a;
    return (a + concat(a, b - 1));

    // if (arguments.length == 1) b=1; 
    // for (i=0; i<b; i++) sum += a;
    // return sum;
}

=======
function concat(a, b) {
    if (b == undefined) b =1;
    if (!b) return a;
    return (a + concat(a, b - 1));

    // if (arguments.length == 1) b=1; 
    // for (i=0; i<b; i++) sum += a;
    // return sum;
}

>>>>>>> 6f4589c15aed2a9820a10c6c95d5eb3099fa2d7a
console.log(concat("Ha ", 3));