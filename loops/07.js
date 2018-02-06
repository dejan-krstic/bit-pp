var a = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];

var i = 0;
for (j = 0; j < a.length; j++) {
    i += a[j][1];

}
if (i / a.lenght < 60) console.log('F');
// if (i/a.lenght >= 60 && i/a.lenght < 70 ) console.log('D');
else if (i / a.length < 70) console.log("D");
else if (i / a.length < 80) console.log("C");
else if (i / a.length < 90) console.log("B");
else console.log("A");