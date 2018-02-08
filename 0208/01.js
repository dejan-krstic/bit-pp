// function sumOfDigits(n) {

//     var sum = 0;
//     if (n < 0) n = -n;
//     if (typeof n != "number") return -1; 

//     while (n > 0) {

//         lastDigit = n % 10;
//         n = (n - lastDigit) / 10;

//         sum += lastDigit;

//     }
//     return sum;

// }

function sumOfDigits(n) {

    var sum = 0;
    if (n < 0) n = -n;
    if (typeof n != "number") return -1; 
    sumb=0;
    suma= n%10;

    while (n > 9) {

        lastDigit = n % 10;
        n = (n - lastDigit) / 10;

        sumb = lastDigit;

    }
    sum=suma+sumb;
    return sum;



}







console.log(sumOfDigits(9));