var sum = 0;
for (i = 0, j = 10; i <10 || j>3; i++, j--) {
    sum += i * j;
}
console.log(sum);
console.log(i);

var res = "\n";
for (var i = 0; i< 9; i++) {
    for (var j = 0; j<9; j++) {
        if (j == i || j == 9 - i - 1) res += "O\t";
        else res += ".\t";
    }
    res += "\n";
}
console.log(res);