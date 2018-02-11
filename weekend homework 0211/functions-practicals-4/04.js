function secondLargestNumber(a) {
    var max = a[0];
    var max2 = max;
    for (i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max2 = max;
            max = a[i];
        }
        else if (a[i] > max2) max2 = a[i];
    }
    return max2;
}
console.log(secondLargestNumber([4, 2, 2, -1, 6,5]));