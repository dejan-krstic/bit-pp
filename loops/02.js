var sum = 0;

j = 1;

for (i = 1; i + j < 1000; i *= 3 ) {
    for (j = 1 ; i + j < 1000 ; j *= 5) {
        console.log(i + " + " + j + " =" , i + j);
    }
    j = 1;
}
