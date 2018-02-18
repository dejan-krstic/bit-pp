console.log((function(a){
        var b=a.split(' ');
        for (i=0; i<b.length; i++) b[i]=b[i].toLowerCase().split('').sort().join('');
        return b.join(' ');
})('Milovan voli Anu'));

