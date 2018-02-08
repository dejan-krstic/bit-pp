

//Write a function that calculates the maximum of two given numbers. 

function minmax(num1, num2) {
    if (num1 < num2) { return num2; }
    else { return num1; }
}
console.log(minmax(3, 2));

// Write a function that checks if a given number is odd.

function oddN(a) {

    if (a % 2) return true;
    else return false;
}

console.log(oddN(5));

//Write a function that checks if a given number is a three digit long number.

function threed(num) {
    if (num > 99 && num < 1000) { return true; }
}
else { return false; }

console.log(thread(5));

// Write a function that calculates an arithmetic mean of four numbers.

function mean(a, b, c, d) {
    return (a + b + c + d) / 4;

}
console.log(mean(4, 5, 6, 7));

// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
// *****
// *    *
// *    *
// *    *
// *****

function square(num) {
    l = '';
    num2 = num * num;
    for (var i = 1; i < num2 + 1; i++) {

        if ((i >= 1 && i <= num) || (i >= num2 - num && i <= num2)) {
            l += "*";
        }
        else {
            if (!((i % num - 1) * (i % num))) { l += "*"; }
            else l += "^";
        }
        if (!(i % num)) l += "\n";


    } return l;
}
console.log(square(11));

// Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
// * * * * *
// * * *
// * * * * * * *

function stars(num1, num2, num3) {
    var result = "";
    for (var i = 1; i <= num1; i++) {
        result += "*";
    } result += "\n"
    for (var i = 1; i <= num2; i++) {
        result += "*";
    } result += "\n"
    for (var i = 1; i <= num3; i++) {
        result += "*";
    } return result;
}
console.log(stars(2, 3, 6));

//Write a function that calculates the sum of odd elements of a given array. 

function oddSum(a){
var sum = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] % 2==1) sum += a[i];

}
return sum;
}
var t = [1, 5, 7, 9, 10, 11];
console.log(oddSum(t));

// Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A.

function numA(a,b){
    j=0;
    for(i=0; i<a.length; i++) 
        {
            if (a[i] == b.toLowerCase() || a[i]==b.toUpperCase()) j++;


        }
return j;

}

console.log(numA(' Ana Brnabic','a'));

//--------------------Write a function that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 

function concat(a,b){
    result="";
    for(var i=1;i<=b;i++){
        result+=a;
    }
return result;
}console.log(concat("tre",8));


//-----------

//Write a function that calculates a number of appearances of a given number in a given array.
 
function numcalc (arr,num){
counter=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]==num){
        counter++;
    }
}return counter;
}
console.log(numcalc([1,3,4,4,7,8,2,4,9],4));

//---------