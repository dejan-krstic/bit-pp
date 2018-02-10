<<<<<<< HEAD
function firstOcc(a, b) {
    for (i = a.length-1; i >= 0; i--) {
        if (a[i] == b) return ++i;

    }
    return -1;
}

=======
function firstOcc(a, b) {
    for (i = a.length-1; i >= 0; i--) {
        if (a[i] == b) return ++i;

    }
    return -1;
}

>>>>>>> 6f4589c15aed2a9820a10c6c95d5eb3099fa2d7a
console.log(firstOcc("Ana Brnabic", "a"));