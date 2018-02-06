for (i = 1; i <= 100; i++) {
    if (!(i % 3)) {
        if (!(i % 5)) {
            console.log("FizzBuzz");
        }
        else {
            console.log("Fizz");
        }
    } else if (!(i % 5)) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}