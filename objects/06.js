//nijansu zanimljiviji metod, skracujemo svaku rec stringa

console.log((function(a){
    var b=a.split(' ');
    for (i=0; i<b.length; i++) b[i]=b[i].substring(0,2)+'.';
    return b.join(' ');
})('Milovan voli Anu'));