var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
str = "";

for (i = 0; i < x.length; i++) {
    str += x[i];
}
console.log(str);