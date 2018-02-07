function firstOcc(a, b) {
    for (i = a.length-1; i >= 0; i--) {
        if (a[i] == b) return ++i;

    }
    return -1;
}

console.log(firstOcc("Ana Brnabic", "a"));