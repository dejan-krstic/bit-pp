function rotateByK(someArray, k) {
    var temp;
    for (i = 0; i < k; i++) {
        temp = someArray[0];
        for (j = 0; j < someArray.length - 1; j++) {
            someArray[j] = someArray[j + 1];
        }
        someArray[j] = temp;
    }
    return someArray;
}
console.log(rotateByK([1,2,3,4,7,6,6,7,8], 5));