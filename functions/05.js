function firstOcc(a, b) {
    for (i = 0; i < a.length; i++) {
        if (a[i] == b) return ++i;

    }
    return -1;
}

console.log(firstOcc("Ana Brnabic", "a"));