function occurr(a,b){
    var j=0;
    for (i=0; i<a.length; i++){
        if (a[i] == b) j++;

    }
    return j;
}
console.log(occurr('ababafakjf k hfkjf ', 'a'));