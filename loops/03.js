var a = [1, 5, 7, 22, -14, -17]
var len = a.length
var sum=0, mul=1;

for (i=0; i < len; i++)
{
sum +=a[i];
mul *=a[i];

}

console.log(sum, mul);