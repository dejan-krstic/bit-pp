// probacu da uradim zadatak na tezi nacin, redefinisanjem indexa niza


function deleteElement(a, e) {
    arrayShorten = 0;
    for (i = 0; i < a.length;)
        if (a[i] == e) {
            for (j = i; j < a.length; j++) a[j] = a[j + 1];
            arrayShorten++;
        } else i++;
        a.length = a.length - arrayShorten;

    return a;

}
console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));



