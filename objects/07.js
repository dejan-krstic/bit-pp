//adds desired number of letters left and right
//could have done differently but I like it this way :)

console.log((function(a,padSL,padS,padEL,padE){
    return a.padStart(padSL+a.length,padS).padEnd(padEL+padSL+a.length,padE);  // ne shvatam sto se a.length ne uvecava odmah nakon a.padStart()
}('Ana',10,"xyz",9,"123")));