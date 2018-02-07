var a = 6;
binarni = "";

while (a != 0) {
    binarni = a % 2 + binarni;
    a = (a - a % 2) / 2;
}

console.log(binarni);