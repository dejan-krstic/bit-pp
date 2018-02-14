'use strict'
/* Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes */

function elInArr(e, a) {
    var i;
    for (i = 0; i<a.length; i++) {
        if (a[i] == e) return 'yes';
    }
    return 'no';
}

console.log(elInArr(3, [5,8,2,4,3,3,5,6]));