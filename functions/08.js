function isPrime(a) {
    if (a == 2) return true;
    if (a % 2 == 0 && a>2) return false;
    for (i = 3; i < a.sqrt; i += 2) {
        if (a % i == 0) return false;

    }
    return true;
}
console.log(isPrime(3457));