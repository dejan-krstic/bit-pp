function multiP(a) {
    for (i = 0; i < a.length; i++) {
        if (!(parseFloat(a[i]) <= 0)) {
            a[i] *= 2;
        }
    } return a;

} console.log(multiP([1, 2, "6", -2, -9, 9]));

//Write a program that finds the first element larger than minimum and prints out its value. 

function largerSecond(a) {
    min2 = a[0];
    min = min2;
    for (i = 1; i < a.length; i++) {
        if (min > a[i]) {
            min2 = min;
            min = a[i];
        }

        else if (min2 > a[i]) {

            min2 = a[i];
        }

    }


    return min2;

}
console.log(largerSecond([4, 2, -1, 0, 5, 6]));


//Write a program that checks if a given array is symmetric. An array is
// symmetric if it can be read the same way both from the left and the right hand side.   

function symetrica(a) {
    for (i = 0; i < a.length / 2; i++) {
        if (!(a[i] == a[a.length - 1 - i])) return false;

    }
    return true;
}
console.log(symetrica("AnavolimilovanA"));


//Write a program that intertwines two arrays. You can assume the arrays are of the same length

function inter(ar1, ar2) {
    j = 0;
    var ar3 = [];
    for (i = 0; i < ar1.length; i++) {
       
        ar3[j++] = ar1[i];
        ar3[j++] = ar2[i];
    } return ar3;
}
console.log(inter([1, 2, 3], [9, 8, 7]));