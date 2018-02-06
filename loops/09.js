var a = [5, 8, 3, 9, 4, 9, 1, 2, 9];
var max = a[0];
var index = 0;
var indices = [];

for (i = 1; i < a.length; i++) {
    if (a[i] >= max) {
        max = a[i];
        index = i;
    }
}
var j = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] == max) {
        indices[j++] = i;
    }
}
console.log(indices + ' are the indices of elements with the same max value = '+ max);
//console.log("Last maximum is a[" + index + "]", '=', max);