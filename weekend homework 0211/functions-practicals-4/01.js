function eInA(a, e) {
    for (i = 0; i < a.length; i++)
        if (a[i] == e) return 'yes';
    return 'no';
}
console.log(eInA([1, 2, 3, 4, 5, 6], 7));