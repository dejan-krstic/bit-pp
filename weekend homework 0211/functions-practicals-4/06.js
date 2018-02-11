function isSymmetric(a) {
    for (i = 0; i < a.length; i++)
        if (a[i] != a[a.length - i - 1]) return "The array isn't symmetric!"
    return "The array is symmetric!"

}
console.log(isSymmetric([2,-2,4,7,4,-2,3]));