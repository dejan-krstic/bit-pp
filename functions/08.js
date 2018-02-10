<<<<<<< HEAD
function isPrime(a) {
    if (a == 2) return true;
    if (a % 2 == 0 && a>2) return false;
    for (i = 3; i < a.sqrt; i += 2) {
        if (a % i == 0) return false;

    }
    return true;
}
=======
function isPrime(a) {
    if (a == 2) return true;
    if (a % 2 == 0 && a>2) return false;
    for (i = 3; i < a.sqrt; i += 2) {
        if (a % i == 0) return false;

    }
    return true;
}
>>>>>>> 6f4589c15aed2a9820a10c6c95d5eb3099fa2d7a
console.log(isPrime(3457));