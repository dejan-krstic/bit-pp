function isBlank(a) {
    if (typeof a == "string" && a == "") { return true;}
    else return false;

}
console.log(isBlank(""));