// opet radim zadatak na tezi nacin, redefinisanjem indexa  niza

function insertE(a, e, p) {
    if (p>a.length) return 'Index number is larger than array size'
    for (i = a.length - 1; i >= p; i--) a[i+1] = a[i];
    a[p]=e;
    return a;
}
console.log(insertE([2,-2,33,12,5,8],78,3));