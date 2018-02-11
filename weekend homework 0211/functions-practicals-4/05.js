function posSum(a) {
    var sum = 0;
    for (i = 0; i < a.length; i++)
        if (a[i] > 0) sum += a[i];
    return sum;
}
console.log(posSum([-1, 1, -2, 2, -3, 3, -4, 4]));