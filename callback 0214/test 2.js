

function small() {
    return 8;
}
function large() {
    return 590;
}
function huge() {
    return 287394;
}

function nSize(numsize, a, b, c) {
    if (numsize=='large') 
    switch (numsize) {
        case 'small': return a();
        case 'large': return b();
        case 'huge': return c();
        default: console.log("Wanted size of a number is not correct! ");
    }

}

console.log(nSize('large', small, large, huge));
