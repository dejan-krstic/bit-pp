console.log((function(a){
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var b=a.split('');
    for (i=0; i<b.length; i++) {
        if (UPPER.includes(b[i])) b[i]=b[i].toLowerCase();
        else if (LOWER.includes(b[i])) b[i]=b[i].toUpperCase();
    }
        
    return b.join('');
})('Milovan voli Anu'));
